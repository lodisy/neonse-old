import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryTranslationWhereInput } from './country-translation-where.input';
import { CountryTranslationOrderByWithAggregationInput } from './country-translation-order-by-with-aggregation.input';
import { CountryTranslationScalarFieldEnum } from './country-translation-scalar-field.enum';
import { CountryTranslationScalarWhereWithAggregatesInput } from './country-translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CountryTranslationCountAggregateInput } from './country-translation-count-aggregate.input';
import { CountryTranslationMinAggregateInput } from './country-translation-min-aggregate.input';
import { CountryTranslationMaxAggregateInput } from './country-translation-max-aggregate.input';

@ArgsType()
export class CountryTranslationGroupByArgs {

    @Field(() => CountryTranslationWhereInput, {nullable:true})
    where?: CountryTranslationWhereInput;

    @Field(() => [CountryTranslationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CountryTranslationOrderByWithAggregationInput>;

    @Field(() => [CountryTranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CountryTranslationScalarFieldEnum>;

    @Field(() => CountryTranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: CountryTranslationScalarWhereWithAggregatesInput;

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
