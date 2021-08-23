import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleUpdateWithoutTranslationsInput } from './product-variant-style-update-without-translations.input';
import { ProductVariantStyleCreateWithoutTranslationsInput } from './product-variant-style-create-without-translations.input';

@InputType()
export class ProductVariantStyleUpsertWithoutTranslationsInput {

    @Field(() => ProductVariantStyleUpdateWithoutTranslationsInput, {nullable:false})
    update!: ProductVariantStyleUpdateWithoutTranslationsInput;

    @Field(() => ProductVariantStyleCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductVariantStyleCreateWithoutTranslationsInput;
}
