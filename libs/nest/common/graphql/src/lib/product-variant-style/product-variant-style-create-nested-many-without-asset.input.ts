import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleCreateWithoutAssetInput } from './product-variant-style-create-without-asset.input';
import { ProductVariantStyleCreateOrConnectWithoutAssetInput } from './product-variant-style-create-or-connect-without-asset.input';
import { ProductVariantStyleCreateManyAssetInputEnvelope } from './product-variant-style-create-many-asset-input-envelope.input';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';

@InputType()
export class ProductVariantStyleCreateNestedManyWithoutAssetInput {

    @Field(() => [ProductVariantStyleCreateWithoutAssetInput], {nullable:true})
    create?: Array<ProductVariantStyleCreateWithoutAssetInput>;

    @Field(() => [ProductVariantStyleCreateOrConnectWithoutAssetInput], {nullable:true})
    connectOrCreate?: Array<ProductVariantStyleCreateOrConnectWithoutAssetInput>;

    @Field(() => ProductVariantStyleCreateManyAssetInputEnvelope, {nullable:true})
    createMany?: ProductVariantStyleCreateManyAssetInputEnvelope;

    @Field(() => [ProductVariantStyleWhereUniqueInput], {nullable:true})
    connect?: Array<ProductVariantStyleWhereUniqueInput>;
}
