import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryCreateWithoutParentInput } from './product-category-create-without-parent.input'
import { ProductCategoryCreateOrConnectWithoutParentInput } from './product-category-create-or-connect-without-parent.input'
import { ProductCategoryUpsertWithWhereUniqueWithoutParentInput } from './product-category-upsert-with-where-unique-without-parent.input'
import { ProductCategoryCreateManyParentInputEnvelope } from './product-category-create-many-parent-input-envelope.input'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'
import { ProductCategoryUpdateWithWhereUniqueWithoutParentInput } from './product-category-update-with-where-unique-without-parent.input'
import { ProductCategoryUpdateManyWithWhereWithoutParentInput } from './product-category-update-many-with-where-without-parent.input'
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input'

@InputType()
export class ProductCategoryUpdateManyWithoutParentInput {
    @Field(() => [ProductCategoryCreateWithoutParentInput], { nullable: true })
    create?: Array<ProductCategoryCreateWithoutParentInput>

    @Field(() => [ProductCategoryCreateOrConnectWithoutParentInput], { nullable: true })
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentInput>

    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutParentInput], { nullable: true })
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutParentInput>

    @Field(() => ProductCategoryCreateManyParentInputEnvelope, { nullable: true })
    createMany?: ProductCategoryCreateManyParentInputEnvelope

    @Field(() => [ProductCategoryWhereUniqueInput], { nullable: true })
    connect?: Array<ProductCategoryWhereUniqueInput>

    @Field(() => [ProductCategoryWhereUniqueInput], { nullable: true })
    set?: Array<ProductCategoryWhereUniqueInput>

    @Field(() => [ProductCategoryWhereUniqueInput], { nullable: true })
    disconnect?: Array<ProductCategoryWhereUniqueInput>

    @Field(() => [ProductCategoryWhereUniqueInput], { nullable: true })
    delete?: Array<ProductCategoryWhereUniqueInput>

    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutParentInput], { nullable: true })
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutParentInput>

    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutParentInput], { nullable: true })
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutParentInput>

    @Field(() => [ProductCategoryScalarWhereInput], { nullable: true })
    deleteMany?: Array<ProductCategoryScalarWhereInput>
}
