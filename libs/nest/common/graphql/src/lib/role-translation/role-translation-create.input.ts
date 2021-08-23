import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { RoleCreateNestedOneWithoutTranslationsInput } from '../role/role-create-nested-one-without-translations.input';

@InputType()
export class RoleTranslationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => RoleCreateNestedOneWithoutTranslationsInput, {nullable:true})
    Role?: RoleCreateNestedOneWithoutTranslationsInput;
}
