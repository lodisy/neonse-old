import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { CountryTranslationCountAggregate } from './country-translation-count-aggregate.output';
import { CountryTranslationMinAggregate } from './country-translation-min-aggregate.output';
import { CountryTranslationMaxAggregate } from './country-translation-max-aggregate.output';

@ObjectType()
export class CountryTranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    countryId?: string;

    @Field(() => CountryTranslationCountAggregate, {nullable:true})
    _count?: CountryTranslationCountAggregate;

    @Field(() => CountryTranslationMinAggregate, {nullable:true})
    _min?: CountryTranslationMinAggregate;

    @Field(() => CountryTranslationMaxAggregate, {nullable:true})
    _max?: CountryTranslationMaxAggregate;
}
