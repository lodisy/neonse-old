import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';
import { ProductVariantStyleTranslationUpdateWithoutProductVariantStyleInput } from './product-variant-style-translation-update-without-product-variant-style.input';

@InputType()
export class ProductVariantStyleTranslationUpdateWithWhereUniqueWithoutProductVariantStyleInput {

    @Field(() => ProductVariantStyleTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleTranslationWhereUniqueInput;

    @Field(() => ProductVariantStyleTranslationUpdateWithoutProductVariantStyleInput, {nullable:false})
    data!: ProductVariantStyleTranslationUpdateWithoutProductVariantStyleInput;
}
