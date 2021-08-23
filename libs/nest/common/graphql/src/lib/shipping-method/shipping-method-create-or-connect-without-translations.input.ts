import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodWhereUniqueInput } from './shipping-method-where-unique.input';
import { ShippingMethodCreateWithoutTranslationsInput } from './shipping-method-create-without-translations.input';

@InputType()
export class ShippingMethodCreateOrConnectWithoutTranslationsInput {

    @Field(() => ShippingMethodWhereUniqueInput, {nullable:false})
    where!: ShippingMethodWhereUniqueInput;

    @Field(() => ShippingMethodCreateWithoutTranslationsInput, {nullable:false})
    create!: ShippingMethodCreateWithoutTranslationsInput;
}
