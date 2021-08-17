import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductTypeCreateWithoutCategoriesInput } from './product-type-create-without-categories.input'
import { ProductTypeCreateOrConnectWithoutCategoriesInput } from './product-type-create-or-connect-without-categories.input'
import { ProductTypeUpsertWithWhereUniqueWithoutCategoriesInput } from './product-type-upsert-with-where-unique-without-categories.input'
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input'
import { ProductTypeUpdateWithWhereUniqueWithoutCategoriesInput } from './product-type-update-with-where-unique-without-categories.input'
import { ProductTypeUpdateManyWithWhereWithoutCategoriesInput } from './product-type-update-many-with-where-without-categories.input'
import { ProductTypeScalarWhereInput } from './product-type-scalar-where.input'

@InputType()
export class ProductTypeUpdateManyWithoutCategoriesInput {
    @Field(() => [ProductTypeCreateWithoutCategoriesInput], { nullable: true })
    create?: Array<ProductTypeCreateWithoutCategoriesInput>

    @Field(() => [ProductTypeCreateOrConnectWithoutCategoriesInput], { nullable: true })
    connectOrCreate?: Array<ProductTypeCreateOrConnectWithoutCategoriesInput>

    @Field(() => [ProductTypeUpsertWithWhereUniqueWithoutCategoriesInput], { nullable: true })
    upsert?: Array<ProductTypeUpsertWithWhereUniqueWithoutCategoriesInput>

    @Field(() => [ProductTypeWhereUniqueInput], { nullable: true })
    connect?: Array<ProductTypeWhereUniqueInput>

    @Field(() => [ProductTypeWhereUniqueInput], { nullable: true })
    set?: Array<ProductTypeWhereUniqueInput>

    @Field(() => [ProductTypeWhereUniqueInput], { nullable: true })
    disconnect?: Array<ProductTypeWhereUniqueInput>

    @Field(() => [ProductTypeWhereUniqueInput], { nullable: true })
    delete?: Array<ProductTypeWhereUniqueInput>

    @Field(() => [ProductTypeUpdateWithWhereUniqueWithoutCategoriesInput], { nullable: true })
    update?: Array<ProductTypeUpdateWithWhereUniqueWithoutCategoriesInput>

    @Field(() => [ProductTypeUpdateManyWithWhereWithoutCategoriesInput], { nullable: true })
    updateMany?: Array<ProductTypeUpdateManyWithWhereWithoutCategoriesInput>

    @Field(() => [ProductTypeScalarWhereInput], { nullable: true })
    deleteMany?: Array<ProductTypeScalarWhereInput>
}
