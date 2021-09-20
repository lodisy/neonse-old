import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCode } from './currency-code.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCurrencyCodeFilter } from './nested-enum-currency-code-filter.input';

@InputType()
export class NestedEnumCurrencyCodeWithAggregatesFilter {

    @Field(() => CurrencyCode, {nullable:true})
    equals?: keyof typeof CurrencyCode;

    @Field(() => [CurrencyCode], {nullable:true})
    in?: Array<keyof typeof CurrencyCode>;

    @Field(() => [CurrencyCode], {nullable:true})
    notIn?: Array<keyof typeof CurrencyCode>;

    @Field(() => NestedEnumCurrencyCodeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCurrencyCodeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCurrencyCodeFilter, {nullable:true})
    _min?: NestedEnumCurrencyCodeFilter;

    @Field(() => NestedEnumCurrencyCodeFilter, {nullable:true})
    _max?: NestedEnumCurrencyCodeFilter;
}
