import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CountryTranslationCountAggregate } from './country-translation-count-aggregate.output';
import { CountryTranslationMinAggregate } from './country-translation-min-aggregate.output';
import { CountryTranslationMaxAggregate } from './country-translation-max-aggregate.output';

@ObjectType()
export class AggregateCountryTranslation {

    @Field(() => CountryTranslationCountAggregate, {nullable:true})
    _count?: CountryTranslationCountAggregate;

    @Field(() => CountryTranslationMinAggregate, {nullable:true})
    _min?: CountryTranslationMinAggregate;

    @Field(() => CountryTranslationMaxAggregate, {nullable:true})
    _max?: CountryTranslationMaxAggregate;
}
