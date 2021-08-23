import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodTranslationWhereUniqueInput } from './shipping-method-translation-where-unique.input';

@ArgsType()
export class DeleteOneShippingMethodTranslationArgs {

    @Field(() => ShippingMethodTranslationWhereUniqueInput, {nullable:false})
    where!: ShippingMethodTranslationWhereUniqueInput;
}
