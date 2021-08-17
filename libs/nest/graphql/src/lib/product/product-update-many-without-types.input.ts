import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCreateWithoutTypesInput } from './product-create-without-types.input'
import { ProductCreateOrConnectWithoutTypesInput } from './product-create-or-connect-without-types.input'
import { ProductUpsertWithWhereUniqueWithoutTypesInput } from './product-upsert-with-where-unique-without-types.input'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { ProductUpdateWithWhereUniqueWithoutTypesInput } from './product-update-with-where-unique-without-types.input'
import { ProductUpdateManyWithWhereWithoutTypesInput } from './product-update-many-with-where-without-types.input'
import { ProductScalarWhereInput } from './product-scalar-where.input'

@InputType()
export class ProductUpdateManyWithoutTypesInput {
    @Field(() => [ProductCreateWithoutTypesInput], { nullable: true })
    create?: Array<ProductCreateWithoutTypesInput>

    @Field(() => [ProductCreateOrConnectWithoutTypesInput], { nullable: true })
    connectOrCreate?: Array<ProductCreateOrConnectWithoutTypesInput>

    @Field(() => [ProductUpsertWithWhereUniqueWithoutTypesInput], { nullable: true })
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutTypesInput>

    @Field(() => [ProductWhereUniqueInput], { nullable: true })
    connect?: Array<ProductWhereUniqueInput>

    @Field(() => [ProductWhereUniqueInput], { nullable: true })
    set?: Array<ProductWhereUniqueInput>

    @Field(() => [ProductWhereUniqueInput], { nullable: true })
    disconnect?: Array<ProductWhereUniqueInput>

    @Field(() => [ProductWhereUniqueInput], { nullable: true })
    delete?: Array<ProductWhereUniqueInput>

    @Field(() => [ProductUpdateWithWhereUniqueWithoutTypesInput], { nullable: true })
    update?: Array<ProductUpdateWithWhereUniqueWithoutTypesInput>

    @Field(() => [ProductUpdateManyWithWhereWithoutTypesInput], { nullable: true })
    updateMany?: Array<ProductUpdateManyWithWhereWithoutTypesInput>

    @Field(() => [ProductScalarWhereInput], { nullable: true })
    deleteMany?: Array<ProductScalarWhereInput>
}
