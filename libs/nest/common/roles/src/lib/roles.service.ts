import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Prisma, Role } from '@prisma/client'

@Injectable()
export class RolesService {
    constructor(private prisma: PrismaService, private readonly role: Role) {}

    /** 后台  */

    async isRoleExist(data: Prisma.RoleWhereUniqueInput): Promise<boolean> {
        const isExist = await this.prisma.role.findFirst({
            where: data,
        })
        if (isExist) {
            return true
        } else return false
    }

    /** 查找角色 */

    async findRole(slug: string): Promise<Role | null> {
        const isExist = await this.isRoleExist({
            slug,
        })
        if (!isExist) {
            throw new HttpException('Role not found', HttpStatus.NOT_FOUND)
        }
        return await this.prisma.role.findUnique({
            where: {
                slug,
            },
        })
    }

    /** 查询所有角色 */

    async findRoles(): Promise<Role[]> {
        return await this.prisma.role.findMany()
    }

    /** 创建角色 */

    async createRole(data: Prisma.RoleCreateInput): Promise<Role | null> {
        const { slug, isDefault } = data

        const isExist = await this.isRoleExist({
            slug,
        })

        if (isExist) {
            throw new HttpException(`Role is already existing`, HttpStatus.OK)
        }

        if (isDefault) {
            const defaultRole = await this.prisma.role.findFirst({
                where: {
                    isDefault: true,
                },
            })
            if (defaultRole) {
                throw new HttpException(`Already have a default role ${defaultRole.name}`, HttpStatus.OK)
            }
        }

        return await this.prisma.role.create({ data })
    }

    /** 修改角色 */

    async updateRole(slug: string, data: Omit<Prisma.RoleCreateInput, 'id'>): Promise<Role> {
        const isExist = await this.isRoleExist({
            slug,
        })

        const defaultRole = await this.prisma.role.findFirst({
            where: {
                isDefault: true,
            },
        })

        if (!isExist) {
            throw new HttpException('Target role is not found', HttpStatus.NOT_FOUND)
        }
        // 若修改目标角色为默认角色，则将当前默认角色设置为非默认

        if (slug !== defaultRole.slug && data?.isDefault) {
            await this.prisma.role.update({
                where: {
                    slug: defaultRole.slug,
                },
                data: {
                    isDefault: false,
                },
            })
        }

        return await this.prisma.role.update({
            data,
            where: {
                slug,
            },
        })
    }

    /** 删除角色 */

    async deleteRole(slug: string): Promise<Role> {
        const targetRole = await this.prisma.role.findFirst({
            where: {
                slug,
            },
            include: {
                user: true,
            },
        })

        if (!targetRole) {
            throw new HttpException('Target role is not found', HttpStatus.NOT_FOUND)
        }

        if (targetRole.user) throw new HttpException('当前有属于该角色的用户，无法删除', HttpStatus.BAD_REQUEST)

        return await this.prisma.role.delete({
            where: {
                slug: targetRole.slug,
            },
        })
    }
}
