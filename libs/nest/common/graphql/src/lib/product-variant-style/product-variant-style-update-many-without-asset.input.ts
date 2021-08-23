import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleCreateWithoutAssetInput } from './product-variant-style-create-without-asset.input';
import { ProductVariantStyleCreateOrConnectWithoutAssetInput } from './product-variant-style-create-or-connect-without-asset.input';
import { ProductVariantStyleUpsertWithWhereUniqueWithoutAssetInput } from './product-variant-style-upsert-with-where-unique-without-asset.input';
import { ProductVariantStyleCreateManyAssetInputEnvelope } from './product-variant-style-create-many-asset-input-envelope.input';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { ProductVariantStyleUpdateWithWhereUniqueWithoutAssetInput } from './product-variant-style-update-with-where-unique-without-asset.input';
import { ProductVariantStyleUpdateManyWithWhereWithoutAssetInput } from './product-variant-style-update-many-with-where-without-asset.input';
import { ProductVariantStyleScalarWhereInput } from './product-variant-style-scalar-where.input';

@InputType()
export class ProductVariantStyleUpdateManyWithoutAssetInput {

    @Field(() => [ProductVariantStyleCreateWithoutAssetInput], {nullable:true})
    create?: Array<ProductVariantStyleCreateWithoutAssetInput>;

    @Field(() => [ProductVariantStyleCreateOrConnectWithoutAssetInput], {nullable:true})
    connectOrCreate?: Array<ProductVariantStyleCreateOrConnectWithoutAssetInput>;

    @Field(() => [ProductVariantStyleUpsertWithWhereUniqueWithoutAssetInput], {nullable:true})
    upsert?: Array<ProductVariantStyleUpsertWithWhereUniqueWithoutAssetInput>;

    @Field(() => ProductVariantStyleCreateManyAssetInputEnvelope, {nullable:true})
    createMany?: ProductVariantStyleCreateManyAssetInputEnvelope;

    @Field(() => [ProductVariantStyleWhereUniqueInput], {nullable:true})
    connect?: Array<ProductVariantStyleWhereUniqueInput>;

    @Field(() => [ProductVariantStyleWhereUniqueInput], {nullable:true})
    set?: Array<ProductVariantStyleWhereUniqueInput>;

    @Field(() => [ProductVariantStyleWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductVariantStyleWhereUniqueInput>;

    @Field(() => [ProductVariantStyleWhereUniqueInput], {nullable:true})
    delete?: Array<ProductVariantStyleWhereUniqueInput>;

    @Field(() => [ProductVariantStyleUpdateWithWhereUniqueWithoutAssetInput], {nullable:true})
    update?: Array<ProductVariantStyleUpdateWithWhereUniqueWithoutAssetInput>;

    @Field(() => [ProductVariantStyleUpdateManyWithWhereWithoutAssetInput], {nullable:true})
    updateMany?: Array<ProductVariantStyleUpdateManyWithWhereWithoutAssetInput>;

    @Field(() => [ProductVariantStyleScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductVariantStyleScalarWhereInput>;
}
