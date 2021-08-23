import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Prisma, ProductType } from '@prisma/client'

@Injectable()
export class ProductTypesService {
    constructor(private prisma: PrismaService) {}

    async isProductTypeExisting(where: Prisma.ProductTypeWhereInput): Promise<boolean> {
        const isExisting = await this.prisma.productType.findFirst({
            where,
        })

        if (isExisting) {
            return true
        } else return false
    }

    /**
     * 查询所有商品分类
     */

    async getProductTypes(): Promise<ProductType[]> {
        return await this.prisma.productType.findMany({
            include: {
                translations: true,
            },
        })
    }

    /**
     * 查询单个商品分类
     *
     */
    async getProductType(slug: string): Promise<ProductType> {
        const isExisting = await this.isProductTypeExisting({ slug })

        if (!isExisting) {
            throw new HttpException('Product Type not existing', HttpStatus.NOT_FOUND)
        }

        return await this.prisma.productType.findUnique({
            where: {
                slug,
            },
            include: {
                products: true,
                translations: true,
            },
        })
    }

    /** 后台 */

    /** 创建商品分类 */

    async createProductType(data: Prisma.ProductTypeCreateInput): Promise<ProductType> {
        const { id } = data
        const isProductTypeExisting = await this.isProductTypeExisting({
            id,
        })

        if (isProductTypeExisting) throw new HttpException('Product Type is already existing', HttpStatus.OK)

        return await this.prisma.productType.create({
            data,
        })
    }

    /** 修改商品分类 */

    async updateProductType(slug: string, data: Prisma.ProductTypeUpdateInput): Promise<ProductType> {
        const isProductTypeExisting = await this.isProductTypeExisting({ slug })

        if (!isProductTypeExisting) throw new HttpException('Product type not found', HttpStatus.NOT_FOUND)

        return await this.prisma.productType.update({
            where: {
                slug,
            },
            data,
        })
    }

    /** 删除商品分类 */

    async deleteProductType(slug: string) {
        const isProductTypeExisting = await this.isProductTypeExisting({
            slug,
        })

        if (!isProductTypeExisting) throw new HttpException('Product type not found', HttpStatus.NOT_FOUND)

        const { products } = await this.prisma.productType.findFirst({
            where: { slug },
            include: {
                products: true,
            },
        })

        if (products.length > 0)
            throw new HttpException('Unable to delete this product type which has products', HttpStatus.BAD_REQUEST)

        return await this.prisma.productType.delete({
            where: { slug },
        })
    }
}
