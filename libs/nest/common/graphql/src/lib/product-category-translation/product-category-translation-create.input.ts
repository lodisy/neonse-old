import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductCategoryCreateNestedOneWithoutTranslationsInput } from '../product-category/product-category-create-nested-one-without-translations.input';

@InputType()
export class ProductCategoryTranslationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductCategoryCreateNestedOneWithoutTranslationsInput, {nullable:true})
    productCategory?: ProductCategoryCreateNestedOneWithoutTranslationsInput;
}
