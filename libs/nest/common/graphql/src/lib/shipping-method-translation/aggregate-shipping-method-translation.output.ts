import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShippingMethodTranslationCountAggregate } from './shipping-method-translation-count-aggregate.output';
import { ShippingMethodTranslationMinAggregate } from './shipping-method-translation-min-aggregate.output';
import { ShippingMethodTranslationMaxAggregate } from './shipping-method-translation-max-aggregate.output';

@ObjectType()
export class AggregateShippingMethodTranslation {

    @Field(() => ShippingMethodTranslationCountAggregate, {nullable:true})
    _count?: ShippingMethodTranslationCountAggregate;

    @Field(() => ShippingMethodTranslationCountAggregate, {nullable:true})
    count?: ShippingMethodTranslationCountAggregate;

    @Field(() => ShippingMethodTranslationMinAggregate, {nullable:true})
    _min?: ShippingMethodTranslationMinAggregate;

    @Field(() => ShippingMethodTranslationMinAggregate, {nullable:true})
    min?: ShippingMethodTranslationMinAggregate;

    @Field(() => ShippingMethodTranslationMaxAggregate, {nullable:true})
    _max?: ShippingMethodTranslationMaxAggregate;

    @Field(() => ShippingMethodTranslationMaxAggregate, {nullable:true})
    max?: ShippingMethodTranslationMaxAggregate;
}
