import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorUpdateWithoutProductVariantInput } from './product-variant-color-update-without-product-variant.input';
import { ProductVariantColorCreateWithoutProductVariantInput } from './product-variant-color-create-without-product-variant.input';

@InputType()
export class ProductVariantColorUpsertWithoutProductVariantInput {

    @Field(() => ProductVariantColorUpdateWithoutProductVariantInput, {nullable:false})
    update!: ProductVariantColorUpdateWithoutProductVariantInput;

    @Field(() => ProductVariantColorCreateWithoutProductVariantInput, {nullable:false})
    create!: ProductVariantColorCreateWithoutProductVariantInput;
}
