import { PrismaService } from '@neonse/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma, Product } from '@prisma/client'

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    /** Get Products (with queries) */
    async getProducts(params: {
        skip?: number
        take?: number
        cursor?: Prisma.ProductWhereUniqueInput
        where?: Prisma.ProductWhereInput
        orderBy?: Prisma.Enumerable<Prisma.ProductOrderByInput>
    }): Promise<Product[]> {
        return await this.prisma.product.findMany(params)
    }

    /** Get single product via sku */

    async getProduct(sku: string): Promise<Product | null> {
        return await this.prisma.product.findUnique({
            where: { sku },
        })
    }

    /** Create new product */

    async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
        return await this.prisma.product.create({
            data,
        })
    }

    /** Bulk create products */

    async createProducts(
        data: Prisma.Enumerable<Prisma.ProductCreateManyInput>,
        skipDuplicates?: boolean,
    ): Promise<Prisma.BatchPayload> {
        return await this.prisma.product.createMany({
            data,
            skipDuplicates,
        })
    }

    /** Update product */

    async updateProduct(params: {
        where: Prisma.ProductWhereUniqueInput
        data: Prisma.ProductUpdateInput
    }): Promise<Product> {
        return await this.prisma.product.update(params)
    }

    /** Delete a product */
    async deleteProduct(sku: string): Promise<Product> {
        return await this.prisma.product.delete({
            where: {
                sku,
            },
        })
    }

    /** Bulk delete products */

    async deleteProducts(where?: Prisma.ProductWhereInput): Promise<Prisma.BatchPayload> {
        return await this.prisma.product.deleteMany({
            where,
        })
    }
}
