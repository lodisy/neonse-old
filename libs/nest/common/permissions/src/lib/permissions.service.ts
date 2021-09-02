import { Permission } from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class PermissionsService {
    constructor(private prisma: PrismaService) {}

    /**
     * 验证权限是否存在 for mutation
     */

    async isExisting(where: Prisma.PermissionWhereUniqueInput): Promise<boolean> {
        const isExisting = await this.prisma.permission.findFirst({ where })

        if (isExisting) throw new HttpException('该权限已经存在', HttpStatus.CONFLICT)

        return false
    }
    /**
     * for query
     */
    async isNotExisting(where: Prisma.PermissionWhereUniqueInput): Promise<boolean> {
        const isNotExisting = await this.prisma.permission.findFirst({ where })

        if (!isNotExisting) throw new HttpException('该权限不存在', HttpStatus.NOT_FOUND)

        return false
    }

    /**
     * 查询权限
     */
    async readPermission(where: Prisma.PermissionWhereUniqueInput): Promise<Permission> {
        return this.prisma.permission.findUnique({
            where,
        })
    }

    /**
     * 查询多个权限
     */
    async readPermissions(query: Prisma.PermissionFindManyArgs): Promise<Permission[]> {
        return this.prisma.permission.findMany(query)
    }
    /**
     * 创建权限
     */
    async createPermission(data: Prisma.PermissionCreateInput): Promise<Permission> {
        return this.prisma.permission.create({
            data,
        })
    }

    /**
     * 删除权限
     */

    async deletePermission(where: Prisma.PermissionWhereUniqueInput): Promise<Permission> {
        return this.prisma.permission.delete({
            where,
        })
    }

    /**
     * 修改权限
     */

    async updatePermission(
        where: Prisma.PermissionWhereUniqueInput,
        data: Prisma.PermissionUpdateInput,
    ): Promise<Permission> {
        return this.prisma.permission.update({
            where,
            data,
        })
    }
}
