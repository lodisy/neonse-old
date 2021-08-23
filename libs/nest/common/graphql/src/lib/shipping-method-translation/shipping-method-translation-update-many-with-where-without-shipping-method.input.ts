import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodTranslationScalarWhereInput } from './shipping-method-translation-scalar-where.input';
import { ShippingMethodTranslationUpdateManyMutationInput } from './shipping-method-translation-update-many-mutation.input';

@InputType()
export class ShippingMethodTranslationUpdateManyWithWhereWithoutShippingMethodInput {

    @Field(() => ShippingMethodTranslationScalarWhereInput, {nullable:false})
    where!: ShippingMethodTranslationScalarWhereInput;

    @Field(() => ShippingMethodTranslationUpdateManyMutationInput, {nullable:false})
    data!: ShippingMethodTranslationUpdateManyMutationInput;
}
