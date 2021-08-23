import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodTranslationWhereInput } from './shipping-method-translation-where.input';
import { ShippingMethodTranslationOrderByInput } from './shipping-method-translation-order-by.input';
import { ShippingMethodTranslationWhereUniqueInput } from './shipping-method-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShippingMethodTranslationCountAggregateInput } from './shipping-method-translation-count-aggregate.input';
import { ShippingMethodTranslationMinAggregateInput } from './shipping-method-translation-min-aggregate.input';
import { ShippingMethodTranslationMaxAggregateInput } from './shipping-method-translation-max-aggregate.input';

@ArgsType()
export class ShippingMethodTranslationAggregateArgs {

    @Field(() => ShippingMethodTranslationWhereInput, {nullable:true})
    where?: ShippingMethodTranslationWhereInput;

    @Field(() => [ShippingMethodTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ShippingMethodTranslationOrderByInput>;

    @Field(() => ShippingMethodTranslationWhereUniqueInput, {nullable:true})
    cursor?: ShippingMethodTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShippingMethodTranslationCountAggregateInput, {nullable:true})
    _count?: ShippingMethodTranslationCountAggregateInput;

    @Field(() => ShippingMethodTranslationMinAggregateInput, {nullable:true})
    _min?: ShippingMethodTranslationMinAggregateInput;

    @Field(() => ShippingMethodTranslationMaxAggregateInput, {nullable:true})
    _max?: ShippingMethodTranslationMaxAggregateInput;
}
