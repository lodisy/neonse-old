import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryTranslationWhereInput } from './country-translation-where.input';

@InputType()
export class CountryTranslationListRelationFilter {

    @Field(() => CountryTranslationWhereInput, {nullable:true})
    every?: CountryTranslationWhereInput;

    @Field(() => CountryTranslationWhereInput, {nullable:true})
    some?: CountryTranslationWhereInput;

    @Field(() => CountryTranslationWhereInput, {nullable:true})
    none?: CountryTranslationWhereInput;
}
