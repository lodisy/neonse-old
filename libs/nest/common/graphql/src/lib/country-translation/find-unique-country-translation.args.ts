import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryTranslationWhereUniqueInput } from './country-translation-where-unique.input';

@ArgsType()
export class FindUniqueCountryTranslationArgs {

    @Field(() => CountryTranslationWhereUniqueInput, {nullable:false})
    where!: CountryTranslationWhereUniqueInput;
}
