import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class OrdersService {
    constructor(private prisma: PrismaService) {}

    /** 验证订单是否不存在 for query */

    async isNotExisting(where: Prisma.OrderWhereUniqueInput): Promise<boolean> {
        const isNotExisting = await this.prisma.order.findFirst({
            where,
        })

        if (!isNotExisting) throw new HttpException('该订单不存在', HttpStatus.NOT_FOUND)

        return false
    }

    /** 验证订单是否不存在 for mutation */

    async isExisting(where: Prisma.OrderWhereUniqueInput): Promise<boolean> {
        const isExisting = await this.prisma.order.findFirst({
            where,
        })

        if (isExisting) throw new HttpException('该订单已存在', HttpStatus.CONFLICT)

        return false
    }
}
