import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';
import { ProductVariantStyleTranslationUpdateWithoutProductVariantStyleInput } from './product-variant-style-translation-update-without-product-variant-style.input';
import { ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput } from './product-variant-style-translation-create-without-product-variant-style.input';

@InputType()
export class ProductVariantStyleTranslationUpsertWithWhereUniqueWithoutProductVariantStyleInput {

    @Field(() => ProductVariantStyleTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleTranslationWhereUniqueInput;

    @Field(() => ProductVariantStyleTranslationUpdateWithoutProductVariantStyleInput, {nullable:false})
    update!: ProductVariantStyleTranslationUpdateWithoutProductVariantStyleInput;

    @Field(() => ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput, {nullable:false})
    create!: ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput;
}
