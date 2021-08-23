import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodTranslationUpdateManyMutationInput } from './shipping-method-translation-update-many-mutation.input';
import { ShippingMethodTranslationWhereInput } from './shipping-method-translation-where.input';

@ArgsType()
export class UpdateManyShippingMethodTranslationArgs {

    @Field(() => ShippingMethodTranslationUpdateManyMutationInput, {nullable:false})
    data!: ShippingMethodTranslationUpdateManyMutationInput;

    @Field(() => ShippingMethodTranslationWhereInput, {nullable:true})
    where?: ShippingMethodTranslationWhereInput;
}
