import {
    FindManyProductArgs,
    Product,
    ProductCreateInput,
    ProductUpdateInput,
    ProductWhereInput,
} from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { GraphqlJwtAuthGuard } from '@neonse/nest-common-shared'
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common'
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ProductsService } from './products.service'

@Resolver(() => Product)
export class ProductsResolver {
    constructor(private productsService: ProductsService, private prisma: PrismaService) {}

    /** 查询多个商品，前端调用时需要加 draft: false 等调整
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
    // @UseGuards(GraphqlJwtAuthGuard) // test
    async products(@Info() info: GraphQLResolveInfo, @Args() query: FindManyProductArgs): Promise<Product[]> {
        const select = new PrismaSelect(info).value

        return await this.prisma.product.findMany({
            ...query,
            ...select,
        })
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
        await this.productsService.isNotExisting({ sku })

        const select = new PrismaSelect(info).value

        const result = await this.prisma.product.findUnique({
            where: { sku },
            ...select,
        })

        if (!result.draft) return result
    }

    /**
     * 后台创建商品
     * @example
     */

    @Mutation(() => Product, {
        description: '创建商品',
    })
    @UseGuards(GraphqlJwtAuthGuard)
    async createProduct(@Args('data') data: ProductCreateInput): Promise<Product> {
        const { sku, variants } = data

        await this.productsService.isExisting({
            sku,
        })

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
    @UseGuards(GraphqlJwtAuthGuard)
    async toggleDraft(@Args('sku', { type: () => String }) sku: string): Promise<Product> {
        await this.productsService.isNotExisting({ sku })

        const isPublished = await this.productsService.isPublished({
            sku,
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
    @UseGuards(GraphqlJwtAuthGuard)
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
    @UseGuards(GraphqlJwtAuthGuard)
    async updateProduct(
        @Args('sku', { type: () => String }) sku: string,
        @Args('data') data: ProductUpdateInput,
    ): Promise<Product> {
        await this.productsService.isExisting({
            sku,
        })

        return await this.prisma.product.update({
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
    @UseGuards(GraphqlJwtAuthGuard)
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
