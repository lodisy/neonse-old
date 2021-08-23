import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Prisma, Product } from '@prisma/client'

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    /** 验证商品是否存在 */

    async isProductExisting(where: Prisma.ProductWhereUniqueInput): Promise<boolean> {
        const isProductExisting = await this.prisma.product.findFirst({ where })

        if (!isProductExisting) {
            return false
        }
        return true
    }

    /** 验证商品是否已经发布 */

    async isProductPublished(where: Prisma.ProductWhereUniqueInput): Promise<boolean> {
        const product = await this.prisma.product.findUnique({
            where,
        })
        if (!product.draft) {
            return true
        } else {
            return false
        }
    }

    /** 查询多个商品，列表页 */
    async getProducts(
        skip?: number,
        take?: number,
        cursor?: Prisma.ProductWhereUniqueInput,
        where?: Prisma.ProductWhereInput,
        orderBy?: Prisma.Enumerable<Prisma.ProductOrderByInput>,
    ) {
        const allProducts = await this.prisma.product.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include: {
                assets: true,
                brands: true,
                translations: true,
            },
        })

        var products = []

        allProducts.map(async (product) => {
            const { id } = product
            const isPublished = await this.isProductPublished({ id })
            if (isPublished) products.push(product)
            return products
        })
    }
    /** 通过 SKU 查询单个商品（商品详情页） */

    async getProduct(sku: string) {
        const isProductExisting = await this.isProductExisting({ sku })

        if (!isProductExisting) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND)
        }
        const product = await this.prisma.product.findUnique({
            where: { sku },
            include: {
                assets: true,
                brands: true,
                types: true,
                variants: true,
                likes: true,
                reviews: true,
                translations: true,
            },
        })

        // 若该商品未发布则不显示

        const { id } = product

        const isPublished = await this.isProductPublished({ id })

        if (!isPublished) return null

        return product
    }

    /**
     * Admin 后台
     */

    /** 后台创建商品 */

    async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
        return await this.prisma.product.create({
            data,
        })
    }

    /** 后台批量删除商品 */

    async createProducts(
        data: Prisma.Enumerable<Prisma.ProductCreateManyInput>,
        skipDuplicates?: boolean,
    ): Promise<Prisma.BatchPayload> {
        return await this.prisma.product.createMany({
            data,
            skipDuplicates,
        })
    }

    /** 后台修改单个商品 */

    async updateProduct(params: {
        where: Prisma.ProductWhereUniqueInput
        data: Prisma.ProductUpdateInput
    }): Promise<Product> {
        return await this.prisma.product.update(params)
    }

    /** 根据 SKU 删除单个商品 */

    async deleteProduct(sku: string): Promise<Product> {
        return await this.prisma.product.delete({
            where: {
                sku,
            },
        })
    }

    /** 批量删除商品 */

    async deleteProducts(where?: Prisma.ProductWhereInput): Promise<Prisma.BatchPayload> {
        return await this.prisma.product.deleteMany({
            where,
        })
    }
}
