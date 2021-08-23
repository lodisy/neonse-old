import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutTranslationsInput } from './country-create-without-translations.input';
import { CountryCreateOrConnectWithoutTranslationsInput } from './country-create-or-connect-without-translations.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@InputType()
export class CountryCreateNestedOneWithoutTranslationsInput {

    @Field(() => CountryCreateWithoutTranslationsInput, {nullable:true})
    create?: CountryCreateWithoutTranslationsInput;

    @Field(() => CountryCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: CountryCreateOrConnectWithoutTranslationsInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    connect?: CountryWhereUniqueInput;
}
