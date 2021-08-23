import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantCreateNestedOneWithoutTranslationsInput } from '../product-variant/product-variant-create-nested-one-without-translations.input';

@InputType()
export class ProductVariantTranslationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductVariantCreateNestedOneWithoutTranslationsInput, {nullable:true})
    ProductVariant?: ProductVariantCreateNestedOneWithoutTranslationsInput;
}
