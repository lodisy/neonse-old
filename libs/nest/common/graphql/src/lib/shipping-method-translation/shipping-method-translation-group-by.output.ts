import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ShippingMethodTranslationCountAggregate } from './shipping-method-translation-count-aggregate.output';
import { ShippingMethodTranslationMinAggregate } from './shipping-method-translation-min-aggregate.output';
import { ShippingMethodTranslationMaxAggregate } from './shipping-method-translation-max-aggregate.output';

@ObjectType()
export class ShippingMethodTranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    shippingMethodId!: string;

    @Field(() => ShippingMethodTranslationCountAggregate, {nullable:true})
    _count?: ShippingMethodTranslationCountAggregate;

    @Field(() => ShippingMethodTranslationMinAggregate, {nullable:true})
    _min?: ShippingMethodTranslationMinAggregate;

    @Field(() => ShippingMethodTranslationMaxAggregate, {nullable:true})
    _max?: ShippingMethodTranslationMaxAggregate;
}
