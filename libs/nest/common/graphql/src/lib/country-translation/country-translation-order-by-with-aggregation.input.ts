import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CountryTranslationCountOrderByAggregateInput } from './country-translation-count-order-by-aggregate.input';
import { CountryTranslationMaxOrderByAggregateInput } from './country-translation-max-order-by-aggregate.input';
import { CountryTranslationMinOrderByAggregateInput } from './country-translation-min-order-by-aggregate.input';

@InputType()
export class CountryTranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;

    @Field(() => CountryTranslationCountOrderByAggregateInput, {nullable:true})
    _count?: CountryTranslationCountOrderByAggregateInput;

    @Field(() => CountryTranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: CountryTranslationMaxOrderByAggregateInput;

    @Field(() => CountryTranslationMinOrderByAggregateInput, {nullable:true})
    _min?: CountryTranslationMinOrderByAggregateInput;
}
