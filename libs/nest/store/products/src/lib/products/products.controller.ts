/**
 * @description controller for admin panel
 * TODO add permission
 */

import { ProductCreateInput, ProductUpdateInput } from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Product } from '@prisma/client'

@Controller('products')
// @UseGuards
export class ProductsController {
    constructor(private prisma: PrismaService) {}

    @Get()
    async findAll(): Promise<Product[]> {
        return await this.prisma.product.findMany()
    }

    @Get(':sku')
    async findOne(@Param() sku: string): Promise<Product> {
        return await this.prisma.product.findUnique({
            where: {
                sku,
            },
        })
    }

    /**
     * 后台创建商品
     * @example
     */

    @Post()
    async create(@Body() data: ProductCreateInput): Promise<Product> {
        return await this.prisma.product.create({
            data,
        })
    }

    @Put(':sku')
    async update(@Param() sku: string, @Body() data: ProductUpdateInput): Promise<Product> {
        return await this.prisma.product.update({
            where: {
                sku,
            },
            data,
        })
    }

    @Delete(':sku')
    async delete(@Param() sku: string): Promise<Product> {
        return await this.prisma.product.delete({
            where: {
                sku,
            },
        })
    }
}
