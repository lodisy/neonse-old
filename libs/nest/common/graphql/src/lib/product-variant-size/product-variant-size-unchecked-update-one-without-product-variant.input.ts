import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantSizeCreateWithoutProductVariantInput } from './product-variant-size-create-without-product-variant.input';
import { ProductVariantSizeCreateOrConnectWithoutProductVariantInput } from './product-variant-size-create-or-connect-without-product-variant.input';
import { ProductVariantSizeUpsertWithoutProductVariantInput } from './product-variant-size-upsert-without-product-variant.input';
import { ProductVariantSizeWhereUniqueInput } from './product-variant-size-where-unique.input';
import { ProductVariantSizeUpdateWithoutProductVariantInput } from './product-variant-size-update-without-product-variant.input';

@InputType()
export class ProductVariantSizeUncheckedUpdateOneWithoutProductVariantInput {

    @Field(() => ProductVariantSizeCreateWithoutProductVariantInput, {nullable:true})
    create?: ProductVariantSizeCreateWithoutProductVariantInput;

    @Field(() => ProductVariantSizeCreateOrConnectWithoutProductVariantInput, {nullable:true})
    connectOrCreate?: ProductVariantSizeCreateOrConnectWithoutProductVariantInput;

    @Field(() => ProductVariantSizeUpsertWithoutProductVariantInput, {nullable:true})
    upsert?: ProductVariantSizeUpsertWithoutProductVariantInput;

    @Field(() => ProductVariantSizeWhereUniqueInput, {nullable:true})
    connect?: ProductVariantSizeWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantSizeUpdateWithoutProductVariantInput, {nullable:true})
    update?: ProductVariantSizeUpdateWithoutProductVariantInput;
}
