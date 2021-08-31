import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    /** 验证商品是否不存在 for query */

    async isNotExisting(where: Prisma.ProductWhereUniqueInput): Promise<boolean> {
        const isNotExisting = await this.prisma.product.findFirst({
            where,
        })

        if (!isNotExisting) throw new HttpException('该商品不存在', HttpStatus.NOT_FOUND)

        return false
    }

    /** 验证商品是否不存在 for mutation */

    async isExisting(where: Prisma.ProductWhereUniqueInput): Promise<boolean> {
        const isExisting = await this.prisma.product.findFirst({
            where,
        })

        if (isExisting) throw new HttpException('该商品已存在', HttpStatus.CONFLICT)

        return false
    }

    /** 验证商品是否已经发布 */

    async isPublished(where: Prisma.ProductWhereUniqueInput): Promise<boolean> {
        const { draft } = await this.prisma.product.findUnique({
            where,
            select: {
                draft: true,
            },
        })

        if (draft) {
            return false
        } else return true
    }

    /** 判断商品是否含有评价
     *  若有，抛出异常；
     *  若无，返回 false
     */

    async hasReviews(where: Prisma.ProductWhereUniqueInput): Promise<boolean> {
        const { reviews } = await this.prisma.product.findUnique({
            where,
            select: {
                reviews: true,
            },
        })

        if (reviews.length > 0) throw new HttpException('该商品有评价，无法删除', HttpStatus.CONFLICT)

        return false
    }
}
