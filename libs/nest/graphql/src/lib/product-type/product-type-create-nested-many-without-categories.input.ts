import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductTypeCreateWithoutCategoriesInput } from './product-type-create-without-categories.input'
import { ProductTypeCreateOrConnectWithoutCategoriesInput } from './product-type-create-or-connect-without-categories.input'
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input'

@InputType()
export class ProductTypeCreateNestedManyWithoutCategoriesInput {
    @Field(() => [ProductTypeCreateWithoutCategoriesInput], { nullable: true })
    create?: Array<ProductTypeCreateWithoutCategoriesInput>

    @Field(() => [ProductTypeCreateOrConnectWithoutCategoriesInput], { nullable: true })
    connectOrCreate?: Array<ProductTypeCreateOrConnectWithoutCategoriesInput>

    @Field(() => [ProductTypeWhereUniqueInput], { nullable: true })
    connect?: Array<ProductTypeWhereUniqueInput>
}
