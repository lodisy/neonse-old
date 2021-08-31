import { GraphqlJwtAuthGuard } from '@neonse/nest-common-auth'
import { ProductCategory, ProductCategoryCreateInput, ProductCategoryUpdateInput } from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { UseGuards } from '@nestjs/common'
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ProductCategoriesService } from './product-categories.service'

@Resolver(() => ProductCategory)
export class ProductCategoriesResolver {
    constructor(private prisma: PrismaService, private productCategoriesService: ProductCategoriesService) {}

    /**
     * 根据 slug 查询单个商品种类
     * @example
     * query{
     *     productCategory(slug:"menswear"){
     *      name
     *      product{
     *          ...
     *      }
     *  }
     * }
     */
    @Query(() => ProductCategory, {
        description: '根据 slug 查询单个商品种类',
    })
    async productCategory(@Args('slug') slug: string, @Info() info: GraphQLResolveInfo): Promise<ProductCategory> {
        await this.productCategoriesService.isNotExisting(slug)

        const select = new PrismaSelect(info).value

        return await this.prisma.productCategory.findUnique({
            where: {
                slug,
            },
            ...select,
        })
    }

    /**
     * 查询所有商品分类
     * @example
     * query{
     *  productCategories{
     *      ...
     *  }
     * }
     */
    @Query(() => [ProductCategory], {
        description: '查询所有商品分类',
    })
    async productCategories(@Info() info: GraphQLResolveInfo): Promise<ProductCategory[]> {
        const select = new PrismaSelect(info).value
        return await this.prisma.productCategory.findMany({
            ...select,
        })
    }

    /**
     * 后台创建商品分类
     * @example
     * mutation{
     *    createProductCategory(data:{
     *        name:"name",
     *        slug:"slug"
     *  })
     * }
     */
    @Mutation(() => ProductCategory, {
        description: '创建商品分类',
    })
    @UseGuards(GraphqlJwtAuthGuard)
    async createProductCategory(
        @Args('data', { type: () => ProductCategoryCreateInput }) data: ProductCategoryCreateInput,
    ): Promise<ProductCategory> {
        const { slug } = data

        await this.productCategoriesService.isExisting(slug)

        return await this.prisma.productCategory.create({
            data,
        })
    }
    /**
     * 后台修改商品分类
     * @example
     * mutation{
     *    updateProductCategory(slug:"slug", data:{
     *        name: {
     *          set:'name'
     *          }
     *  }){
     *  ...
     *  }
     * }
     */
    @Mutation(() => ProductCategory, {
        description: '修改商品分类',
    })
    @UseGuards(GraphqlJwtAuthGuard)
    async updateProductCategory(
        @Args('slug') slug: string,
        @Args('data', { type: () => ProductCategoryUpdateInput }) data: ProductCategoryUpdateInput,
    ): Promise<ProductCategory> {
        await this.productCategoriesService.isExisting(slug)
        return await this.prisma.productCategory.update({
            data,
            where: {
                slug,
            },
        })
    }

    /**
     * 后台删除商品分类
     * @example
     * mutation{
     *    deleteProductCategory(slug:"slug"){
     *      ...
     *  }
     * }
     */
    @Mutation(() => ProductCategory, {
        description: '后台删除商品分类',
        nullable: true,
    })
    @UseGuards(GraphqlJwtAuthGuard)
    async deleteProductCategory(@Args('slug') slug: string): Promise<ProductCategory> {
        await this.productCategoriesService.isExisting(slug)
        await this.productCategoriesService.hasProducts(slug)
        return await this.prisma.productCategory.delete({
            where: { slug },
        })
    }
}
