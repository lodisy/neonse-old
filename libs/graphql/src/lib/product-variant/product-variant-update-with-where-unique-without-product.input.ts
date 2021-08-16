import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateWithoutProductInput } from './product-variant-update-without-product.input';

@InputType()
export class ProductVariantUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;

    @Field(() => ProductVariantUpdateWithoutProductInput, {nullable:false})
    data!: ProductVariantUpdateWithoutProductInput;
}
