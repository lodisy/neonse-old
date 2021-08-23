import { ProductType } from '@neonse/nest-common-graphql'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { ProductTypesService } from './product-types.service'

@Resolver(() => ProductType)
export class ProductTypesResolver {
    constructor(private productTypesService: ProductTypesService) {}

    @Query(() => [ProductType], { name: 'productTypes' })
    async getProductTypes() {
        return await this.productTypesService.getProductTypes()
    }

    @Query(() => ProductType, { name: 'productType' })
    async getProductType(@Args('slug', { type: () => String }) slug: string) {
        return await this.productTypesService.getProductType(slug)
    }
}
