import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { BrandCreateNestedOneWithoutTranslationsInput } from '../brand/brand-create-nested-one-without-translations.input';

@InputType()
export class BrandTranslationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => BrandCreateNestedOneWithoutTranslationsInput, {nullable:false})
    brand!: BrandCreateNestedOneWithoutTranslationsInput;
}
