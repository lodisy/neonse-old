import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodTranslationUpdateInput } from './shipping-method-translation-update.input';
import { ShippingMethodTranslationWhereUniqueInput } from './shipping-method-translation-where-unique.input';

@ArgsType()
export class UpdateOneShippingMethodTranslationArgs {

    @Field(() => ShippingMethodTranslationUpdateInput, {nullable:false})
    data!: ShippingMethodTranslationUpdateInput;

    @Field(() => ShippingMethodTranslationWhereUniqueInput, {nullable:false})
    where!: ShippingMethodTranslationWhereUniqueInput;
}
