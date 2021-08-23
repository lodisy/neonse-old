import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryTranslationWhereUniqueInput } from './country-translation-where-unique.input';
import { CountryTranslationUpdateWithoutCountryInput } from './country-translation-update-without-country.input';
import { CountryTranslationCreateWithoutCountryInput } from './country-translation-create-without-country.input';

@InputType()
export class CountryTranslationUpsertWithWhereUniqueWithoutCountryInput {

    @Field(() => CountryTranslationWhereUniqueInput, {nullable:false})
    where!: CountryTranslationWhereUniqueInput;

    @Field(() => CountryTranslationUpdateWithoutCountryInput, {nullable:false})
    update!: CountryTranslationUpdateWithoutCountryInput;

    @Field(() => CountryTranslationCreateWithoutCountryInput, {nullable:false})
    create!: CountryTranslationCreateWithoutCountryInput;
}
