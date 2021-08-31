import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

@Injectable()
export class ProductCategoriesService {
    constructor(private prisma: PrismaService) {}

    // for mutation

    async isExisting(slug: string): Promise<boolean> {
        const isExisting = await this.prisma.productCategory.findFirst({
            where: {
                slug,
            },
        })

        if (isExisting) throw new HttpException('该商品种类已存在', HttpStatus.CONFLICT)

        return false
    }

    // for query

    async isNotExisting(slug: string): Promise<boolean> {
        const isNotExisting = await this.prisma.productCategory.findFirst({
            where: { slug },
        })

        if (!isNotExisting) throw new HttpException('该商品种类不存在', HttpStatus.NOT_FOUND)

        return false
    }

    // for delete
    async hasProducts(slug: string): Promise<boolean> {
        const { products } = await this.prisma.productCategory.findFirst({
            where: { slug },
            select: {
                products: true,
            },
        })
        if (products.length > 0) throw new HttpException('该商品种类含有商品，无法删除', HttpStatus.CONFLICT)

        return false
    }
}
