import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodTranslationWhereInput } from './shipping-method-translation-where.input';
import { ShippingMethodTranslationOrderByInput } from './shipping-method-translation-order-by.input';
import { ShippingMethodTranslationScalarFieldEnum } from './shipping-method-translation-scalar-field.enum';
import { ShippingMethodTranslationScalarWhereWithAggregatesInput } from './shipping-method-translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShippingMethodTranslationCountAggregateInput } from './shipping-method-translation-count-aggregate.input';
import { ShippingMethodTranslationMinAggregateInput } from './shipping-method-translation-min-aggregate.input';
import { ShippingMethodTranslationMaxAggregateInput } from './shipping-method-translation-max-aggregate.input';

@ArgsType()
export class ShippingMethodTranslationGroupByArgs {

    @Field(() => ShippingMethodTranslationWhereInput, {nullable:true})
    where?: ShippingMethodTranslationWhereInput;

    @Field(() => [ShippingMethodTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ShippingMethodTranslationOrderByInput>;

    @Field(() => [ShippingMethodTranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShippingMethodTranslationScalarFieldEnum>;

    @Field(() => ShippingMethodTranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShippingMethodTranslationScalarWhereWithAggregatesInput;

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
