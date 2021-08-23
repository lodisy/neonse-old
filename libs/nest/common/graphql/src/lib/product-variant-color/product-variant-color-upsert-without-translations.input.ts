import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorUpdateWithoutTranslationsInput } from './product-variant-color-update-without-translations.input';
import { ProductVariantColorCreateWithoutTranslationsInput } from './product-variant-color-create-without-translations.input';

@InputType()
export class ProductVariantColorUpsertWithoutTranslationsInput {

    @Field(() => ProductVariantColorUpdateWithoutTranslationsInput, {nullable:false})
    update!: ProductVariantColorUpdateWithoutTranslationsInput;

    @Field(() => ProductVariantColorCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductVariantColorCreateWithoutTranslationsInput;
}
