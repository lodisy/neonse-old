import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

@Injectable()
export class ProductTypesService {
    constructor(private prisma: PrismaService) {}

    // for mutation

    async isExisting(slug: string): Promise<boolean> {
        const isExisting = await this.prisma.productType.findFirst({
            where: {
                slug,
            },
        })

        if (isExisting) throw new HttpException('该商品分类已存在', HttpStatus.CONFLICT)

        return false
    }

    // for query

    async isNotExisting(slug: string): Promise<boolean> {
        const isNotExisting = await this.prisma.productType.findFirst({
            where: { slug },
        })

        if (!isNotExisting) throw new HttpException('该商品分类不存在', HttpStatus.NOT_FOUND)

        return false
    }

    // for delete
    async hasProducts(slug: string): Promise<boolean> {
        const { products } = await this.prisma.productType.findFirst({
            where: { slug },
            select: {
                products: true,
            },
        })
        if (products.length > 0) throw new HttpException('该商品分类含有商品，无法删除', HttpStatus.CONFLICT)

        return false
    }
}
