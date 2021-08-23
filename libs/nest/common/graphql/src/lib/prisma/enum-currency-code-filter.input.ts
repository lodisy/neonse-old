import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCode } from './currency-code.enum';
import { NestedEnumCurrencyCodeFilter } from './nested-enum-currency-code-filter.input';

@InputType()
export class EnumCurrencyCodeFilter {

    @Field(() => CurrencyCode, {nullable:true})
    equals?: keyof typeof CurrencyCode;

    @Field(() => [CurrencyCode], {nullable:true})
    in?: Array<keyof typeof CurrencyCode>;

    @Field(() => [CurrencyCode], {nullable:true})
    notIn?: Array<keyof typeof CurrencyCode>;

    @Field(() => NestedEnumCurrencyCodeFilter, {nullable:true})
    not?: NestedEnumCurrencyCodeFilter;
}
