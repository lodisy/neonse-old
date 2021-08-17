import {
    Product,
    ProductCreateInput,
    ProductOrderByInput,
    ProductUpdateInput,
    ProductWhereInput,
    ProductWhereUniqueInput,
} from '@neonse/nest-graphql'
import { Args, Int, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ProductsService } from './products.service'

@Resolver('Product')
export class ProductsResolver {
    constructor(private productsService: ProductsService) {}

    @ResolveField(() => [Product], {
        description: '获取多个商品，可指定条件',
    })
    async products(
        @Args('skip', { type: () => Int, nullable: true }) skip?: number,
        @Args('take', { type: () => Int, nullable: true }) take?: number,
        @Args('cursor', { type: () => ProductWhereUniqueInput }) cursor?: ProductWhereUniqueInput,
        @Args('where', { type: () => ProductWhereInput }) where?: ProductWhereInput,
        @Args('orderBy', {
            type: () => ProductOrderByInput,
            defaultValue: {
                createdAt: 'desc',
            },
        })
        orderBy?: ProductOrderByInput,
    ): Promise<Product[]> {
        return await this.productsService.getProducts({
            skip,
            take,
            cursor,
            where: { draft: false, ...where }, // 过滤掉未发布商品
            orderBy,
        })
    }

    @Query(() => Product, {
        description: '根据 SKU 获取单个商品',
    })
    async product(@Args('sku', { type: () => String }) sku: string): Promise<Product | null> {
        const result = await this.productsService.getProduct(sku)

        if (result.draft === true) return // 过滤掉未发布商品

        return result
    }

    @Mutation(() => Product, {
        description: '根据 SKU 修改指定商品',
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

    @Mutation(() => Product, {
        description: '根据 SKU 删除指定商品',
    })
    async deleteProduct(@Args('sku', { type: () => String }) sku: string): Promise<Product> {
        return await this.productsService.deleteProduct(sku)
    }

    @Mutation(() => Product, {
        description: '创建商品',
    })
    async createProduct(@Args('data') data: ProductCreateInput): Promise<Product> {
        return await this.productsService.createProduct(data)
    }
}
