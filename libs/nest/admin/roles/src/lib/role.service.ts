import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Prisma, Role } from '@prisma/client'

@Injectable()
export class RoleService {
    constructor(private prisma: PrismaService, private readonly role: Role) {}

    /** 查找角色 */

    async findRole(slug: string): Promise<Role | null> {
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

        const existingRole = await this.prisma.role.findFirst({
            where: {
                slug,
            },
        })

        if (existingRole) {
            throw new HttpException(`${existingRole.name} is already existing`, HttpStatus.OK)
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
        const targetRole = await this.prisma.role.findFirst({
            where: {
                slug,
            },
        })

        const defaultRole = await this.prisma.role.findFirst({
            where: {
                isDefault: true,
            },
        })

        if (!targetRole) {
            throw new HttpException('Target role is not found', HttpStatus.NOT_FOUND)
        }
        // 若修改目标角色为默认角色，则将当前默认角色设置为非默认

        if (targetRole.slug !== defaultRole.slug && data?.isDefault) {
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
        })

        if (!targetRole) {
            throw new HttpException('Target role is not found', HttpStatus.NOT_FOUND)
        }

        // TODO 判断该角色下是否有用户，若有则无法删除，根据角色查找用户

        return await this.prisma.role.delete({
            where: {
                slug: targetRole.slug,
            },
        })
    }
}
