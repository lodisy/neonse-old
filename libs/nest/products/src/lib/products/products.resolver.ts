/**
 * reference https://paljs.com/plugins/select/
 * https://github.com/unlight/prisma-nestjs-graphql/blob/8896256a8e9eaf4422f2a1939889b8926b61f2a4/src/example/user/user.resolver.ts
 */

import {
    Product,
    ProductCreateInput,
    ProductOrderByInput,
    ProductUpdateInput,
    ProductWhereInput,
    ProductWhereUniqueInput,
} from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus } from '@nestjs/common'
import { Args, Info, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ProductsService } from './products.service'

@Resolver(() => Product)
export class ProductsResolver {
    constructor(private productsService: ProductsService, private prisma: PrismaService) {}

    /** 查询多个商品
     * @example
     * query{
     *  products(orderBy:{ createdAt:desc }){
     *    id
     *    name
     *    ...
     *  }
     * }
     */

    @Query(() => [Product], {
        description: '获取多个商品，可指定条件',
    })
    async products(
        @Info() info: GraphQLResolveInfo,
        @Args('skip', { type: () => Int, nullable: true }) skip?: number,
        @Args('take', { type: () => Int, nullable: true }) take?: number,
        @Args('cursor', { type: () => ProductWhereUniqueInput, nullable: true }) cursor?: ProductWhereUniqueInput,
        @Args('where', { type: () => ProductWhereInput, nullable: true }) where?: ProductWhereInput,
        @Args('orderBy', {
            type: () => ProductOrderByInput,
            nullable: true,
            defaultValue: {
                createdAt: 'desc',
            },
        })
        orderBy?: ProductOrderByInput,
    ): Promise<Product[]> {
        const select = new PrismaSelect(info).value

        return await this.prisma.product.findMany({ where, skip, take, cursor, orderBy, ...select })
    }

    /** 查询单个商品
     * @example
     * query{
     *  product(sku:"sku"){
     *    id
     *    name
     *    ...
     *  }
     * }
     */

    @Query(() => Product, {
        description: '根据 SKU 获取单个商品',
    })
    async product(
        @Info() info: GraphQLResolveInfo,
        @Args('sku', { type: () => String }) sku: string,
    ): Promise<Product> {
        const select = new PrismaSelect(info).value

        const result = await this.prisma.product.findUnique({
            where: { sku },
            ...select,
        })

        if (!result) throw new HttpException('商品不存在', HttpStatus.NOT_FOUND)

        if (!result.draft) return result
    }

    /**
     * 后台创建商品
     * @example
     */

    @Mutation(() => Product, {
        description: '创建商品',
    })
    async createProduct(@Args('data') data: ProductCreateInput): Promise<Product> {
        return await this.prisma.product.create({
            data,
        })
    }

    /**
     * 后台发布或取消发布单个商品
     * @example
     * mutation{
     *   product(sku:"sku"){
     *      ...
     *  }
     * }
     */

    @Mutation(() => Product, {
        description: '根据 SKU 发布或取消单个商品',
    })
    async toggleDraft(@Args('sku', { type: () => String }) sku: string): Promise<Product> {
        const { draft: isPublished } = await this.prisma.product.findUnique({
            where: {
                sku,
            },
            select: {
                draft: true,
            },
        })

        return await this.prisma.product.update({
            where: { sku },
            data: {
                draft: {
                    set: !isPublished,
                },
            },
        })
    }

    /**
     * 后台批量发布或取消发布商品
     * @example
     * mutation{
     *     bulkToggleDraft(draft:false, where:{
     *      AND / OR ...
     *      field:{
     *         filters:...
     *     }
     *   })
     * }
     */

    @Mutation(() => Product, {
        description: '后台批量发布或批量取消发布商品',
        nullable: true,
    })
    async bulkToggleDraft(@Args('draft') draft: boolean, @Args('where') where: ProductWhereInput) {
        await this.prisma.product.updateMany({
            data: {
                draft: {
                    set: draft,
                },
            },
            where,
        })
        return
    }

    /** 后台修改单个商品
     * @example
     * mutation updateProduct(sku:"sku", data:{
     *  field:{
     *   set:xxx
     *  }
     * }){
     *  ...
     * }
     */

    @Mutation(() => Product, {
        description: '根据 SKU 修改指定商品信息',
    })
    async updateProduct(
        @Args('sku', { type: () => String }) sku: string,
        @Args('data') data: ProductUpdateInput,
    ): Promise<Product> {
        return await this.productsService.updateProduct({
            where: { sku },
            data,
        })
    }

    /**
     * 后台根据 SKU 删除单个商品
     * TODO paljs PrismaDelete
     * @example
     * mutation{
     *  deleteProduct(sku:"mc002"){
     *      field //返回被删除商品的字段
     *  }
     * }
     */

    @Mutation(() => Product, {
        description: '根据 SKU 删除指定商品',
        nullable: true,
    })
    async deleteProduct(@Args('sku') sku: string): Promise<Product> {
        const { reviews, variants: productVariants } = await this.prisma.product.findUnique({
            where: { sku },
            select: {
                reviews: true,
                variants: true,
            },
        })

        if (reviews.length > 0) throw new HttpException('该商品有评价，无法删除', HttpStatus.FORBIDDEN)

        // 先删除 product variants

        try {
            productVariants.map(async (variant) => {
                await this.prisma.productVariant.delete({
                    where: {
                        sku: variant.sku,
                    },
                })
            })
        } catch (err) {
            console.log(err)
            throw new HttpException('删除商品规格失败', HttpStatus.INTERNAL_SERVER_ERROR)
        }

        return await this.prisma.product.delete({
            where: { sku },
        })
    }
}
