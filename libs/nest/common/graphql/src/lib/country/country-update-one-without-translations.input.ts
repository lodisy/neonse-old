import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutTranslationsInput } from './country-create-without-translations.input';
import { CountryCreateOrConnectWithoutTranslationsInput } from './country-create-or-connect-without-translations.input';
import { CountryUpsertWithoutTranslationsInput } from './country-upsert-without-translations.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryUpdateWithoutTranslationsInput } from './country-update-without-translations.input';

@InputType()
export class CountryUpdateOneWithoutTranslationsInput {

    @Field(() => CountryCreateWithoutTranslationsInput, {nullable:true})
    create?: CountryCreateWithoutTranslationsInput;

    @Field(() => CountryCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: CountryCreateOrConnectWithoutTranslationsInput;

    @Field(() => CountryUpsertWithoutTranslationsInput, {nullable:true})
    upsert?: CountryUpsertWithoutTranslationsInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    connect?: CountryWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CountryUpdateWithoutTranslationsInput, {nullable:true})
    update?: CountryUpdateWithoutTranslationsInput;
}
