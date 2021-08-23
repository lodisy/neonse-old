import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryTranslationWhereUniqueInput } from './country-translation-where-unique.input';
import { CountryTranslationCreateWithoutCountryInput } from './country-translation-create-without-country.input';

@InputType()
export class CountryTranslationCreateOrConnectWithoutCountryInput {

    @Field(() => CountryTranslationWhereUniqueInput, {nullable:false})
    where!: CountryTranslationWhereUniqueInput;

    @Field(() => CountryTranslationCreateWithoutCountryInput, {nullable:false})
    create!: CountryTranslationCreateWithoutCountryInput;
}
