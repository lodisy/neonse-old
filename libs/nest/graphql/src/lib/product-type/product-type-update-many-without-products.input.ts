import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductTypeCreateWithoutProductsInput } from './product-type-create-without-products.input'
import { ProductTypeCreateOrConnectWithoutProductsInput } from './product-type-create-or-connect-without-products.input'
import { ProductTypeUpsertWithWhereUniqueWithoutProductsInput } from './product-type-upsert-with-where-unique-without-products.input'
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input'
import { ProductTypeUpdateWithWhereUniqueWithoutProductsInput } from './product-type-update-with-where-unique-without-products.input'
import { ProductTypeUpdateManyWithWhereWithoutProductsInput } from './product-type-update-many-with-where-without-products.input'
import { ProductTypeScalarWhereInput } from './product-type-scalar-where.input'

@InputType()
export class ProductTypeUpdateManyWithoutProductsInput {
    @Field(() => [ProductTypeCreateWithoutProductsInput], { nullable: true })
    create?: Array<ProductTypeCreateWithoutProductsInput>

    @Field(() => [ProductTypeCreateOrConnectWithoutProductsInput], { nullable: true })
    connectOrCreate?: Array<ProductTypeCreateOrConnectWithoutProductsInput>

    @Field(() => [ProductTypeUpsertWithWhereUniqueWithoutProductsInput], { nullable: true })
    upsert?: Array<ProductTypeUpsertWithWhereUniqueWithoutProductsInput>

    @Field(() => [ProductTypeWhereUniqueInput], { nullable: true })
    connect?: Array<ProductTypeWhereUniqueInput>

    @Field(() => [ProductTypeWhereUniqueInput], { nullable: true })
    set?: Array<ProductTypeWhereUniqueInput>

    @Field(() => [ProductTypeWhereUniqueInput], { nullable: true })
    disconnect?: Array<ProductTypeWhereUniqueInput>

    @Field(() => [ProductTypeWhereUniqueInput], { nullable: true })
    delete?: Array<ProductTypeWhereUniqueInput>

    @Field(() => [ProductTypeUpdateWithWhereUniqueWithoutProductsInput], { nullable: true })
    update?: Array<ProductTypeUpdateWithWhereUniqueWithoutProductsInput>

    @Field(() => [ProductTypeUpdateManyWithWhereWithoutProductsInput], { nullable: true })
    updateMany?: Array<ProductTypeUpdateManyWithWhereWithoutProductsInput>

    @Field(() => [ProductTypeScalarWhereInput], { nullable: true })
    deleteMany?: Array<ProductTypeScalarWhereInput>
}
