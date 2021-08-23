import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantSizeCreateWithoutProductVariantInput } from './product-variant-size-create-without-product-variant.input';
import { ProductVariantSizeCreateOrConnectWithoutProductVariantInput } from './product-variant-size-create-or-connect-without-product-variant.input';
import { ProductVariantSizeWhereUniqueInput } from './product-variant-size-where-unique.input';

@InputType()
export class ProductVariantSizeUncheckedCreateNestedOneWithoutProductVariantInput {

    @Field(() => ProductVariantSizeCreateWithoutProductVariantInput, {nullable:true})
    create?: ProductVariantSizeCreateWithoutProductVariantInput;

    @Field(() => ProductVariantSizeCreateOrConnectWithoutProductVariantInput, {nullable:true})
    connectOrCreate?: ProductVariantSizeCreateOrConnectWithoutProductVariantInput;

    @Field(() => ProductVariantSizeWhereUniqueInput, {nullable:true})
    connect?: ProductVariantSizeWhereUniqueInput;
}
