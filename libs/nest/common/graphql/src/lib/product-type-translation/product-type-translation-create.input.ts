import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductTypeCreateNestedOneWithoutTranslationsInput } from '../product-type/product-type-create-nested-one-without-translations.input';

@InputType()
export class ProductTypeTranslationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductTypeCreateNestedOneWithoutTranslationsInput, {nullable:true})
    productType?: ProductTypeCreateNestedOneWithoutTranslationsInput;
}
