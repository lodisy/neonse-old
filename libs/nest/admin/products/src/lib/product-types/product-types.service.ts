import { PrismaService } from '@neonse/nest-common-prisma'
import { Injectable } from '@nestjs/common'
import { Prisma, ProductType } from '@prisma/client'

@Injectable()
export class ProductTypesService {
    constructor(private prisma: PrismaService) {}

    /**
     * @description Get all product types without querys
     *
     */

    async getProductTypes(): Promise<ProductType[]> {
        return await this.prisma.productType.findMany()
    }

    /**
     * @description Get single product type without querys
     *
     */
    async getProductType(slug: string): Promise<ProductType> {
        return await this.prisma.productType.findUnique({
            where: {
                slug,
            },
        })
    }

    /** Create new product type */

    async createProductType(data: Prisma.ProductTypeCreateInput): Promise<ProductType> {
        return await this.prisma.productType.create({
            data,
        })
    }
}
