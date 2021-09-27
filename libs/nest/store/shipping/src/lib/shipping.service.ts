import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Prisma, ShippingZone } from '@prisma/client'

Injectable()
export class ShippingService {
    private zones: ShippingZone[]
    constructor(private prisma: PrismaService) {}

    /** isExisting */

    isExisting(where: Prisma.ShippingZoneWhereUniqueInput): boolean {
        const isExisting = this.prisma.shippingZone.findFirst({
            where,
        })
        if (isExisting) return true

        return false
    }

    /** if have members */

    async haveMembers(where: Prisma.ShippingZoneWhereUniqueInput) {
        const { members } = await this.prisma.shippingZone.findUnique({
            where,
            include: {
                members: true,
            },
        })

        if (members) return true

        return false
    }

    async findAll(query: Prisma.ShippingZoneFindManyArgs): Promise<ShippingZone[]> {
        return this.prisma.shippingZone.findMany(query)
    }

    async findOne(where: Prisma.ShippingZoneWhereUniqueInput): Promise<ShippingZone> {
        return this.prisma.shippingZone.findUnique({
            where,
        })
    }

    async create(data: Prisma.ShippingZoneCreateInput): Promise<ShippingZone> {
        const { name } = data
        return this.prisma.shippingZone.create({
            data,
        })
    }

    async delete(where: Prisma.ShippingZoneWhereUniqueInput): Promise<ShippingZone> {
        const haveMembers = await this.haveMembers(where)

        if (haveMembers) throw new HttpException('删除失败', HttpStatus.CONFLICT)

        return this.prisma.shippingZone.delete({ where })
    }
}
