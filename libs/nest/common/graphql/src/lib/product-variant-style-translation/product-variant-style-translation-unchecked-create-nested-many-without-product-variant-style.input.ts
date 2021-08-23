import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput } from './product-variant-style-translation-create-without-product-variant-style.input';
import { ProductVariantStyleTranslationCreateOrConnectWithoutProductVariantStyleInput } from './product-variant-style-translation-create-or-connect-without-product-variant-style.input';
import { ProductVariantStyleTranslationCreateManyProductVariantStyleInputEnvelope } from './product-variant-style-translation-create-many-product-variant-style-input-envelope.input';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';

@InputType()
export class ProductVariantStyleTranslationUncheckedCreateNestedManyWithoutProductVariantStyleInput {

    @Field(() => [ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput], {nullable:true})
    create?: Array<ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput>;

    @Field(() => [ProductVariantStyleTranslationCreateOrConnectWithoutProductVariantStyleInput], {nullable:true})
    connectOrCreate?: Array<ProductVariantStyleTranslationCreateOrConnectWithoutProductVariantStyleInput>;

    @Field(() => ProductVariantStyleTranslationCreateManyProductVariantStyleInputEnvelope, {nullable:true})
    createMany?: ProductVariantStyleTranslationCreateManyProductVariantStyleInputEnvelope;

    @Field(() => [ProductVariantStyleTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductVariantStyleTranslationWhereUniqueInput>;
}
