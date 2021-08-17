import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Product } from '../product/product.model'
import { ProductType } from '../product-type/product-type.model'

@ObjectType()
export class ProductCategory {
    @Field(() => ID, { nullable: false })
    id!: string
    @Field(() => String, { nullable: false })
    name!: string
    @Field(() => String, { nullable: false })
    slug!: string
    @Field(() => String, { nullable: true })
    parentId!: string | null
    @Field(() => ProductCategory, { nullable: true })
    parent?: ProductCategory
    @Field(() => [ProductCategory], { nullable: true })
    children?: Array<ProductCategory>
    @Field(() => [Product], { nullable: true })
    products?: Array<Product>
    @Field(() => [ProductType], { nullable: true })
    types?: Array<ProductType>
}
