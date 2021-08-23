import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { ProductVariantStyleUpdateWithoutAssetInput } from './product-variant-style-update-without-asset.input';
import { ProductVariantStyleCreateWithoutAssetInput } from './product-variant-style-create-without-asset.input';

@InputType()
export class ProductVariantStyleUpsertWithWhereUniqueWithoutAssetInput {

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleWhereUniqueInput;

    @Field(() => ProductVariantStyleUpdateWithoutAssetInput, {nullable:false})
    update!: ProductVariantStyleUpdateWithoutAssetInput;

    @Field(() => ProductVariantStyleCreateWithoutAssetInput, {nullable:false})
    create!: ProductVariantStyleCreateWithoutAssetInput;
}
