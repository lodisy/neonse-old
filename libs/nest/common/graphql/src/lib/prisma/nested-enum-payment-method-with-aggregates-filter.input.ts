import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethod } from './payment-method.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPaymentMethodFilter } from './nested-enum-payment-method-filter.input';

@InputType()
export class NestedEnumPaymentMethodWithAggregatesFilter {

    @Field(() => PaymentMethod, {nullable:true})
    equals?: keyof typeof PaymentMethod;

    @Field(() => [PaymentMethod], {nullable:true})
    in?: Array<keyof typeof PaymentMethod>;

    @Field(() => [PaymentMethod], {nullable:true})
    notIn?: Array<keyof typeof PaymentMethod>;

    @Field(() => NestedEnumPaymentMethodWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPaymentMethodWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPaymentMethodFilter, {nullable:true})
    _min?: NestedEnumPaymentMethodFilter;

    @Field(() => NestedEnumPaymentMethodFilter, {nullable:true})
    _max?: NestedEnumPaymentMethodFilter;
}
