import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantUpdateWithoutTranslationsInput } from './product-variant-update-without-translations.input';
import { ProductVariantCreateWithoutTranslationsInput } from './product-variant-create-without-translations.input';

@InputType()
export class ProductVariantUpsertWithoutTranslationsInput {

    @Field(() => ProductVariantUpdateWithoutTranslationsInput, {nullable:false})
    update!: ProductVariantUpdateWithoutTranslationsInput;

    @Field(() => ProductVariantCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductVariantCreateWithoutTranslationsInput;
}
