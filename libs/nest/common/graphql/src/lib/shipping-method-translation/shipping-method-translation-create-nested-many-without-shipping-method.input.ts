import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodTranslationCreateWithoutShippingMethodInput } from './shipping-method-translation-create-without-shipping-method.input';
import { ShippingMethodTranslationCreateOrConnectWithoutShippingMethodInput } from './shipping-method-translation-create-or-connect-without-shipping-method.input';
import { ShippingMethodTranslationCreateManyShippingMethodInputEnvelope } from './shipping-method-translation-create-many-shipping-method-input-envelope.input';
import { ShippingMethodTranslationWhereUniqueInput } from './shipping-method-translation-where-unique.input';

@InputType()
export class ShippingMethodTranslationCreateNestedManyWithoutShippingMethodInput {

    @Field(() => [ShippingMethodTranslationCreateWithoutShippingMethodInput], {nullable:true})
    create?: Array<ShippingMethodTranslationCreateWithoutShippingMethodInput>;

    @Field(() => [ShippingMethodTranslationCreateOrConnectWithoutShippingMethodInput], {nullable:true})
    connectOrCreate?: Array<ShippingMethodTranslationCreateOrConnectWithoutShippingMethodInput>;

    @Field(() => ShippingMethodTranslationCreateManyShippingMethodInputEnvelope, {nullable:true})
    createMany?: ShippingMethodTranslationCreateManyShippingMethodInputEnvelope;

    @Field(() => [ShippingMethodTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ShippingMethodTranslationWhereUniqueInput>;
}
