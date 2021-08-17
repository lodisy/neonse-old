import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryCreateWithoutTypesInput } from './product-category-create-without-types.input'
import { ProductCategoryCreateOrConnectWithoutTypesInput } from './product-category-create-or-connect-without-types.input'
import { ProductCategoryUpsertWithWhereUniqueWithoutTypesInput } from './product-category-upsert-with-where-unique-without-types.input'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'
import { ProductCategoryUpdateWithWhereUniqueWithoutTypesInput } from './product-category-update-with-where-unique-without-types.input'
import { ProductCategoryUpdateManyWithWhereWithoutTypesInput } from './product-category-update-many-with-where-without-types.input'
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input'

@InputType()
export class ProductCategoryUpdateManyWithoutTypesInput {
    @Field(() => [ProductCategoryCreateWithoutTypesInput], { nullable: true })
    create?: Array<ProductCategoryCreateWithoutTypesInput>

    @Field(() => [ProductCategoryCreateOrConnectWithoutTypesInput], { nullable: true })
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutTypesInput>

    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutTypesInput], { nullable: true })
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutTypesInput>

    @Field(() => [ProductCategoryWhereUniqueInput], { nullable: true })
    connect?: Array<ProductCategoryWhereUniqueInput>

    @Field(() => [ProductCategoryWhereUniqueInput], { nullable: true })
    set?: Array<ProductCategoryWhereUniqueInput>

    @Field(() => [ProductCategoryWhereUniqueInput], { nullable: true })
    disconnect?: Array<ProductCategoryWhereUniqueInput>

    @Field(() => [ProductCategoryWhereUniqueInput], { nullable: true })
    delete?: Array<ProductCategoryWhereUniqueInput>

    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutTypesInput], { nullable: true })
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutTypesInput>

    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutTypesInput], { nullable: true })
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutTypesInput>

    @Field(() => [ProductCategoryScalarWhereInput], { nullable: true })
    deleteMany?: Array<ProductCategoryScalarWhereInput>
}
