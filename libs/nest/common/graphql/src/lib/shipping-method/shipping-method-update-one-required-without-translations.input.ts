import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodCreateWithoutTranslationsInput } from './shipping-method-create-without-translations.input';
import { ShippingMethodCreateOrConnectWithoutTranslationsInput } from './shipping-method-create-or-connect-without-translations.input';
import { ShippingMethodUpsertWithoutTranslationsInput } from './shipping-method-upsert-without-translations.input';
import { ShippingMethodWhereUniqueInput } from './shipping-method-where-unique.input';
import { ShippingMethodUpdateWithoutTranslationsInput } from './shipping-method-update-without-translations.input';

@InputType()
export class ShippingMethodUpdateOneRequiredWithoutTranslationsInput {

    @Field(() => ShippingMethodCreateWithoutTranslationsInput, {nullable:true})
    create?: ShippingMethodCreateWithoutTranslationsInput;

    @Field(() => ShippingMethodCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ShippingMethodCreateOrConnectWithoutTranslationsInput;

    @Field(() => ShippingMethodUpsertWithoutTranslationsInput, {nullable:true})
    upsert?: ShippingMethodUpsertWithoutTranslationsInput;

    @Field(() => ShippingMethodWhereUniqueInput, {nullable:true})
    connect?: ShippingMethodWhereUniqueInput;

    @Field(() => ShippingMethodUpdateWithoutTranslationsInput, {nullable:true})
    update?: ShippingMethodUpdateWithoutTranslationsInput;
}
