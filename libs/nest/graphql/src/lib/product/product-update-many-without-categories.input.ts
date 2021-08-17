import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCreateWithoutCategoriesInput } from './product-create-without-categories.input'
import { ProductCreateOrConnectWithoutCategoriesInput } from './product-create-or-connect-without-categories.input'
import { ProductUpsertWithWhereUniqueWithoutCategoriesInput } from './product-upsert-with-where-unique-without-categories.input'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { ProductUpdateWithWhereUniqueWithoutCategoriesInput } from './product-update-with-where-unique-without-categories.input'
import { ProductUpdateManyWithWhereWithoutCategoriesInput } from './product-update-many-with-where-without-categories.input'
import { ProductScalarWhereInput } from './product-scalar-where.input'

@InputType()
export class ProductUpdateManyWithoutCategoriesInput {
    @Field(() => [ProductCreateWithoutCategoriesInput], { nullable: true })
    create?: Array<ProductCreateWithoutCategoriesInput>

    @Field(() => [ProductCreateOrConnectWithoutCategoriesInput], { nullable: true })
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoriesInput>

    @Field(() => [ProductUpsertWithWhereUniqueWithoutCategoriesInput], { nullable: true })
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCategoriesInput>

    @Field(() => [ProductWhereUniqueInput], { nullable: true })
    connect?: Array<ProductWhereUniqueInput>

    @Field(() => [ProductWhereUniqueInput], { nullable: true })
    set?: Array<ProductWhereUniqueInput>

    @Field(() => [ProductWhereUniqueInput], { nullable: true })
    disconnect?: Array<ProductWhereUniqueInput>

    @Field(() => [ProductWhereUniqueInput], { nullable: true })
    delete?: Array<ProductWhereUniqueInput>

    @Field(() => [ProductUpdateWithWhereUniqueWithoutCategoriesInput], { nullable: true })
    update?: Array<ProductUpdateWithWhereUniqueWithoutCategoriesInput>

    @Field(() => [ProductUpdateManyWithWhereWithoutCategoriesInput], { nullable: true })
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCategoriesInput>

    @Field(() => [ProductScalarWhereInput], { nullable: true })
    deleteMany?: Array<ProductScalarWhereInput>
}
