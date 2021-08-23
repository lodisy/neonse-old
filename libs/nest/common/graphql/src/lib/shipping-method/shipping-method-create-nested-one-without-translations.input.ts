import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodCreateWithoutTranslationsInput } from './shipping-method-create-without-translations.input';
import { ShippingMethodCreateOrConnectWithoutTranslationsInput } from './shipping-method-create-or-connect-without-translations.input';
import { ShippingMethodWhereUniqueInput } from './shipping-method-where-unique.input';

@InputType()
export class ShippingMethodCreateNestedOneWithoutTranslationsInput {

    @Field(() => ShippingMethodCreateWithoutTranslationsInput, {nullable:true})
    create?: ShippingMethodCreateWithoutTranslationsInput;

    @Field(() => ShippingMethodCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ShippingMethodCreateOrConnectWithoutTranslationsInput;

    @Field(() => ShippingMethodWhereUniqueInput, {nullable:true})
    connect?: ShippingMethodWhereUniqueInput;
}
