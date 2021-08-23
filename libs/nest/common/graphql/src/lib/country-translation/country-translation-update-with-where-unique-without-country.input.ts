import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryTranslationWhereUniqueInput } from './country-translation-where-unique.input';
import { CountryTranslationUpdateWithoutCountryInput } from './country-translation-update-without-country.input';

@InputType()
export class CountryTranslationUpdateWithWhereUniqueWithoutCountryInput {

    @Field(() => CountryTranslationWhereUniqueInput, {nullable:false})
    where!: CountryTranslationWhereUniqueInput;

    @Field(() => CountryTranslationUpdateWithoutCountryInput, {nullable:false})
    data!: CountryTranslationUpdateWithoutCountryInput;
}
