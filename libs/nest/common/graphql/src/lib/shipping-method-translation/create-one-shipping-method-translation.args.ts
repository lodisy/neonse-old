import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodTranslationCreateInput } from './shipping-method-translation-create.input';

@ArgsType()
export class CreateOneShippingMethodTranslationArgs {

    @Field(() => ShippingMethodTranslationCreateInput, {nullable:false})
    data!: ShippingMethodTranslationCreateInput;
}
