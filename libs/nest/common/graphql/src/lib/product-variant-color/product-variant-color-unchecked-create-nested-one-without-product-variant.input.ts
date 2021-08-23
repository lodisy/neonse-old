import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorCreateWithoutProductVariantInput } from './product-variant-color-create-without-product-variant.input';
import { ProductVariantColorCreateOrConnectWithoutProductVariantInput } from './product-variant-color-create-or-connect-without-product-variant.input';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';

@InputType()
export class ProductVariantColorUncheckedCreateNestedOneWithoutProductVariantInput {

    @Field(() => ProductVariantColorCreateWithoutProductVariantInput, {nullable:true})
    create?: ProductVariantColorCreateWithoutProductVariantInput;

    @Field(() => ProductVariantColorCreateOrConnectWithoutProductVariantInput, {nullable:true})
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutProductVariantInput;

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:true})
    connect?: ProductVariantColorWhereUniqueInput;
}
