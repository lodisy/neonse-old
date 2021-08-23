import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';
import { ProductVariantColorCreateWithoutProductVariantInput } from './product-variant-color-create-without-product-variant.input';

@InputType()
export class ProductVariantColorCreateOrConnectWithoutProductVariantInput {

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:false})
    where!: ProductVariantColorWhereUniqueInput;

    @Field(() => ProductVariantColorCreateWithoutProductVariantInput, {nullable:false})
    create!: ProductVariantColorCreateWithoutProductVariantInput;
}
