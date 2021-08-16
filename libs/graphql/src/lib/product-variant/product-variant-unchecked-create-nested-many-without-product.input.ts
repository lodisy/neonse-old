import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutProductInput } from './product-variant-create-without-product.input';
import { ProductVariantCreateOrConnectWithoutProductInput } from './product-variant-create-or-connect-without-product.input';
import { ProductVariantCreateManyProductInputEnvelope } from './product-variant-create-many-product-input-envelope.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@InputType()
export class ProductVariantUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [ProductVariantCreateWithoutProductInput], {nullable:true})
    create?: Array<ProductVariantCreateWithoutProductInput>;

    @Field(() => [ProductVariantCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;

    @Field(() => ProductVariantCreateManyProductInputEnvelope, {nullable:true})
    createMany?: ProductVariantCreateManyProductInputEnvelope;

    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    connect?: Array<ProductVariantWhereUniqueInput>;
}
