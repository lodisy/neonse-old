import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    /**
     * @description Get products with or without querys
     * @example GET `.../products?querys`
     */

    @Get()
    async getProducts(
        @Param('skip') skip?: number,
        @Param('take') take?: number,
        @Param('cursor') cursor?: Prisma.UserWhereUniqueInput,
        @Param('where') where?: Prisma.UserWhereInput,
        @Param('orderBy') orderBy?: Prisma.UserOrderByInput,
    ) {
        return await this.productsService.getProducts({
            skip,
            take,
            cursor,
            where,
            orderBy,
        })
    }

    /**
     * @description Get single product
     * @example GET `.../products/sku`
     */

    @Get(':sku')
    async getProduct(@Param('sku') sku: string) {
        return await this.productsService.getProduct(sku)
    }

    /**
     * @description Create a new product
     * @example POST `.../products/new`
     */

    @Post('new')
    async createProduct(@Body() data: Prisma.ProductCreateInput) {
        return await this.productsService.createProduct(data)
    }

    /**
     * @description Update a product
     * @example PUT `.../products/sku`
     */
    @Put(':sku')
    async updateProduct(@Param('sku') sku: string, @Body() data: Prisma.ProductUpdateInput) {
        return await this.productsService.updateProduct({
            where: {
                sku,
            },
            data: data,
        })
    }

    /**
     * @description Delete a product
     * @example DELETE `.../products/sku`
     */
    @Delete(':sku')
    async deleteProduct(@Param('sku') sku: string) {
        return await this.productsService.deleteProduct(sku)
    }
}
