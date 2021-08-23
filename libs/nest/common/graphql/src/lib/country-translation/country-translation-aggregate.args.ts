import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryTranslationWhereInput } from './country-translation-where.input';
import { CountryTranslationOrderByInput } from './country-translation-order-by.input';
import { CountryTranslationWhereUniqueInput } from './country-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CountryTranslationCountAggregateInput } from './country-translation-count-aggregate.input';
import { CountryTranslationMinAggregateInput } from './country-translation-min-aggregate.input';
import { CountryTranslationMaxAggregateInput } from './country-translation-max-aggregate.input';

@ArgsType()
export class CountryTranslationAggregateArgs {

    @Field(() => CountryTranslationWhereInput, {nullable:true})
    where?: CountryTranslationWhereInput;

    @Field(() => [CountryTranslationOrderByInput], {nullable:true})
    orderBy?: Array<CountryTranslationOrderByInput>;

    @Field(() => CountryTranslationWhereUniqueInput, {nullable:true})
    cursor?: CountryTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CountryTranslationCountAggregateInput, {nullable:true})
    _count?: CountryTranslationCountAggregateInput;

    @Field(() => CountryTranslationMinAggregateInput, {nullable:true})
    _min?: CountryTranslationMinAggregateInput;

    @Field(() => CountryTranslationMaxAggregateInput, {nullable:true})
    _max?: CountryTranslationMaxAggregateInput;
}
