import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryCreateWithoutTypesInput } from './product-category-create-without-types.input'
import { ProductCategoryCreateOrConnectWithoutTypesInput } from './product-category-create-or-connect-without-types.input'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'

@InputType()
export class ProductCategoryCreateNestedManyWithoutTypesInput {
    @Field(() => [ProductCategoryCreateWithoutTypesInput], { nullable: true })
    create?: Array<ProductCategoryCreateWithoutTypesInput>

    @Field(() => [ProductCategoryCreateOrConnectWithoutTypesInput], { nullable: true })
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutTypesInput>

    @Field(() => [ProductCategoryWhereUniqueInput], { nullable: true })
    connect?: Array<ProductCategoryWhereUniqueInput>
}
