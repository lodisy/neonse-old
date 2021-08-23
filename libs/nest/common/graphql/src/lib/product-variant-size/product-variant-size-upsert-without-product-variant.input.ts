import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantSizeUpdateWithoutProductVariantInput } from './product-variant-size-update-without-product-variant.input';
import { ProductVariantSizeCreateWithoutProductVariantInput } from './product-variant-size-create-without-product-variant.input';

@InputType()
export class ProductVariantSizeUpsertWithoutProductVariantInput {

    @Field(() => ProductVariantSizeUpdateWithoutProductVariantInput, {nullable:false})
    update!: ProductVariantSizeUpdateWithoutProductVariantInput;

    @Field(() => ProductVariantSizeCreateWithoutProductVariantInput, {nullable:false})
    create!: ProductVariantSizeCreateWithoutProductVariantInput;
}
