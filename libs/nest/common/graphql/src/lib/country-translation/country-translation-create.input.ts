import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { CountryCreateNestedOneWithoutTranslationsInput } from '../country/country-create-nested-one-without-translations.input';

@InputType()
export class CountryTranslationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CountryCreateNestedOneWithoutTranslationsInput, {nullable:true})
    country?: CountryCreateNestedOneWithoutTranslationsInput;
}
