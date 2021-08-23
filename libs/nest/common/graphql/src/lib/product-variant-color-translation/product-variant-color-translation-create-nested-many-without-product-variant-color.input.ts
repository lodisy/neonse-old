import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorTranslationCreateWithoutProductVariantColorInput } from './product-variant-color-translation-create-without-product-variant-color.input';
import { ProductVariantColorTranslationCreateOrConnectWithoutProductVariantColorInput } from './product-variant-color-translation-create-or-connect-without-product-variant-color.input';
import { ProductVariantColorTranslationCreateManyProductVariantColorInputEnvelope } from './product-variant-color-translation-create-many-product-variant-color-input-envelope.input';
import { ProductVariantColorTranslationWhereUniqueInput } from './product-variant-color-translation-where-unique.input';

@InputType()
export class ProductVariantColorTranslationCreateNestedManyWithoutProductVariantColorInput {

    @Field(() => [ProductVariantColorTranslationCreateWithoutProductVariantColorInput], {nullable:true})
    create?: Array<ProductVariantColorTranslationCreateWithoutProductVariantColorInput>;

    @Field(() => [ProductVariantColorTranslationCreateOrConnectWithoutProductVariantColorInput], {nullable:true})
    connectOrCreate?: Array<ProductVariantColorTranslationCreateOrConnectWithoutProductVariantColorInput>;

    @Field(() => ProductVariantColorTranslationCreateManyProductVariantColorInputEnvelope, {nullable:true})
    createMany?: ProductVariantColorTranslationCreateManyProductVariantColorInputEnvelope;

    @Field(() => [ProductVariantColorTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductVariantColorTranslationWhereUniqueInput>;
}
