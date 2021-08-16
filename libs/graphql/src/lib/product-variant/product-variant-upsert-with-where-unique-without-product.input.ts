import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateWithoutProductInput } from './product-variant-update-without-product.input';
import { ProductVariantCreateWithoutProductInput } from './product-variant-create-without-product.input';

@InputType()
export class ProductVariantUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;

    @Field(() => ProductVariantUpdateWithoutProductInput, {nullable:false})
    update!: ProductVariantUpdateWithoutProductInput;

    @Field(() => ProductVariantCreateWithoutProductInput, {nullable:false})
    create!: ProductVariantCreateWithoutProductInput;
}
