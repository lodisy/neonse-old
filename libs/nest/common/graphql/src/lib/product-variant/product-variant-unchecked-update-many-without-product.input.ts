import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutProductInput } from './product-variant-create-without-product.input';
import { ProductVariantCreateOrConnectWithoutProductInput } from './product-variant-create-or-connect-without-product.input';
import { ProductVariantUpsertWithWhereUniqueWithoutProductInput } from './product-variant-upsert-with-where-unique-without-product.input';
import { ProductVariantCreateManyProductInputEnvelope } from './product-variant-create-many-product-input-envelope.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateWithWhereUniqueWithoutProductInput } from './product-variant-update-with-where-unique-without-product.input';
import { ProductVariantUpdateManyWithWhereWithoutProductInput } from './product-variant-update-many-with-where-without-product.input';
import { ProductVariantScalarWhereInput } from './product-variant-scalar-where.input';

@InputType()
export class ProductVariantUncheckedUpdateManyWithoutProductInput {

    @Field(() => [ProductVariantCreateWithoutProductInput], {nullable:true})
    create?: Array<ProductVariantCreateWithoutProductInput>;

    @Field(() => [ProductVariantCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductVariantUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<ProductVariantUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductVariantCreateManyProductInputEnvelope, {nullable:true})
    createMany?: ProductVariantCreateManyProductInputEnvelope;

    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    connect?: Array<ProductVariantWhereUniqueInput>;

    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    set?: Array<ProductVariantWhereUniqueInput>;

    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductVariantWhereUniqueInput>;

    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    delete?: Array<ProductVariantWhereUniqueInput>;

    @Field(() => [ProductVariantUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<ProductVariantUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductVariantUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<ProductVariantUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductVariantScalarWhereInput>;
}
