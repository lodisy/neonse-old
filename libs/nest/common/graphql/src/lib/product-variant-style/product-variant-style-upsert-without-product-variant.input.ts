import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleUpdateWithoutProductVariantInput } from './product-variant-style-update-without-product-variant.input';
import { ProductVariantStyleCreateWithoutProductVariantInput } from './product-variant-style-create-without-product-variant.input';

@InputType()
export class ProductVariantStyleUpsertWithoutProductVariantInput {

    @Field(() => ProductVariantStyleUpdateWithoutProductVariantInput, {nullable:false})
    update!: ProductVariantStyleUpdateWithoutProductVariantInput;

    @Field(() => ProductVariantStyleCreateWithoutProductVariantInput, {nullable:false})
    create!: ProductVariantStyleCreateWithoutProductVariantInput;
}
