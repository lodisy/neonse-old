import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantUpdateWithoutAssetsInput } from './product-variant-update-without-assets.input';
import { ProductVariantCreateWithoutAssetsInput } from './product-variant-create-without-assets.input';

@InputType()
export class ProductVariantUpsertWithoutAssetsInput {

    @Field(() => ProductVariantUpdateWithoutAssetsInput, {nullable:false})
    update!: ProductVariantUpdateWithoutAssetsInput;

    @Field(() => ProductVariantCreateWithoutAssetsInput, {nullable:false})
    create!: ProductVariantCreateWithoutAssetsInput;
}
