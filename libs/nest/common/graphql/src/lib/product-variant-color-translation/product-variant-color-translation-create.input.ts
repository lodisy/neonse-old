import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantColorCreateNestedOneWithoutTranslationsInput } from '../product-variant-color/product-variant-color-create-nested-one-without-translations.input';

@InputType()
export class ProductVariantColorTranslationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductVariantColorCreateNestedOneWithoutTranslationsInput, {nullable:true})
    ProductVariantColor?: ProductVariantColorCreateNestedOneWithoutTranslationsInput;
}
