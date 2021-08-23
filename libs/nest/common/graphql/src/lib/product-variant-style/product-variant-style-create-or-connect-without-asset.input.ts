import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { ProductVariantStyleCreateWithoutAssetInput } from './product-variant-style-create-without-asset.input';

@InputType()
export class ProductVariantStyleCreateOrConnectWithoutAssetInput {

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleWhereUniqueInput;

    @Field(() => ProductVariantStyleCreateWithoutAssetInput, {nullable:false})
    create!: ProductVariantStyleCreateWithoutAssetInput;
}
