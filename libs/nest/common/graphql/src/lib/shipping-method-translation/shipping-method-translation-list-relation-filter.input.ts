import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodTranslationWhereInput } from './shipping-method-translation-where.input';

@InputType()
export class ShippingMethodTranslationListRelationFilter {

    @Field(() => ShippingMethodTranslationWhereInput, {nullable:true})
    every?: ShippingMethodTranslationWhereInput;

    @Field(() => ShippingMethodTranslationWhereInput, {nullable:true})
    some?: ShippingMethodTranslationWhereInput;

    @Field(() => ShippingMethodTranslationWhereInput, {nullable:true})
    none?: ShippingMethodTranslationWhereInput;
}
