import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { ProductVariantStyleUpdateWithoutAssetInput } from './product-variant-style-update-without-asset.input';

@InputType()
export class ProductVariantStyleUpdateWithWhereUniqueWithoutAssetInput {

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleWhereUniqueInput;

    @Field(() => ProductVariantStyleUpdateWithoutAssetInput, {nullable:false})
    data!: ProductVariantStyleUpdateWithoutAssetInput;
}
