import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCode } from './currency-code.enum';

@InputType()
export class NestedEnumCurrencyCodeFilter {

    @Field(() => CurrencyCode, {nullable:true})
    equals?: keyof typeof CurrencyCode;

    @Field(() => [CurrencyCode], {nullable:true})
    in?: Array<keyof typeof CurrencyCode>;

    @Field(() => [CurrencyCode], {nullable:true})
    notIn?: Array<keyof typeof CurrencyCode>;

    @Field(() => NestedEnumCurrencyCodeFilter, {nullable:true})
    not?: NestedEnumCurrencyCodeFilter;
}
