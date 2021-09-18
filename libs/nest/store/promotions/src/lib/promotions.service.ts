import { PrismaService } from '@neonse/nest-common-prisma'
import { Injectable } from '@nestjs/common'
import { Prisma, Promotion } from '@prisma/client'

@Injectable()
export class PromotionsService {
    constructor(private prisma: PrismaService) {}

    async addPromotion(data: Prisma.PromotionCreateInput): Promise<Promotion> {
        return this.prisma.promotion.create({ data })
    }

    async enablePromotion(where: Prisma.PromotionWhereUniqueInput): Promise<Promotion> {
        return this.prisma.promotion.update({
            where,
            data: {
                enabled: true,
            },
        })
    }

    async disablePromotion(where: Prisma.PromotionWhereUniqueInput): Promise<Promotion> {
        return this.prisma.promotion.update({ where, data: { enabled: false } })
    }

    async removePromotion(where: Prisma.PromotionWhereUniqueInput): Promise<Promotion> {
        return this.prisma.promotion.delete({ where })
    }

    async updatePromotion(
        where: Prisma.PromotionWhereUniqueInput,
        data: Prisma.PromotionUpdateInput,
    ): Promise<Promotion> {
        return this.prisma.promotion.update({ where, data })
    }
}
