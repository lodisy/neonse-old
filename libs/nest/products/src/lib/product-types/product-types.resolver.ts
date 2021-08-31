import { GraphqlJwtAuthGuard } from '@neonse/nest-common-auth'
import { ProductType, ProductTypeCreateInput, ProductTypeUpdateInput } from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { UseGuards } from '@nestjs/common'
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ProductTypesService } from './product-types.service'

@Resolver(() => ProductType)
export class ProductTypesResolver {
    constructor(private prisma: PrismaService, private productTypesService: ProductTypesService) {}

    /**
     * 根据 slug 查询单个商品分类
     * @example
     * query{
     *     productType(slug:"menswear"){
     *      name
     *      product{
     *          ...
     *      }
     *  }
     * }
     */
    @Query(() => ProductType, {
        description: '根据 slug 查询单个商品分类',
    })
    async productType(@Args('slug') slug: string, @Info() info: GraphQLResolveInfo): Promise<ProductType> {
        await this.productTypesService.isNotExisting(slug)

        const select = new PrismaSelect(info).value

        return await this.prisma.productType.findUnique({
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
     *  productTypes{
     *      ...
     *  }
     * }
     */
    @Query(() => [ProductType], {
        description: '查询所有商品分类',
    })
    async productTypes(@Info() info: GraphQLResolveInfo): Promise<ProductType[]> {
        const select = new PrismaSelect(info).value
        return await this.prisma.productType.findMany({
            ...select,
        })
    }

    /**
     * 后台创建商品分类
     * @example
     * mutation{
     *    createProductType(data:{
     *        name:"name",
     *        slug:"slug"
     *  })
     * }
     */
    @Mutation(() => ProductType, {
        description: '创建商品分类',
    })
    @UseGuards(GraphqlJwtAuthGuard)
    async createProductType(
        @Args('data', { type: () => ProductTypeCreateInput }) data: ProductTypeCreateInput,
    ): Promise<ProductType> {
        const { slug } = data

        await this.productTypesService.isExisting(slug)

        return await this.prisma.productType.create({
            data,
        })
    }
    /**
     * 后台修改商品分类
     * @example
     * mutation{
     *    updateProductType(slug:"slug", data:{
     *        name: {
     *          set:'name'
     *          }
     *  }){
     *  ...
     *  }
     * }
     */
    @Mutation(() => ProductType, {
        description: '修改商品分类',
    })
    @UseGuards(GraphqlJwtAuthGuard)
    async updateProductType(
        @Args('slug') slug: string,
        @Args('data', { type: () => ProductTypeUpdateInput }) data: ProductTypeUpdateInput,
    ): Promise<ProductType> {
        await this.productTypesService.isExisting(slug)
        return await this.prisma.productType.update({
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
     *    deleteProductType(slug:"slug"){
     *      ...
     *  }
     * }
     */
    @Mutation(() => ProductType, {
        description: '后台删除商品分类',
        nullable: true,
    })
    @UseGuards(GraphqlJwtAuthGuard)
    async deleteProductType(@Args('slug') slug: string): Promise<ProductType> {
        await this.productTypesService.isExisting(slug)
        await this.productTypesService.hasProducts(slug)
        return await this.prisma.productType.delete({
            where: { slug },
        })
    }
}
