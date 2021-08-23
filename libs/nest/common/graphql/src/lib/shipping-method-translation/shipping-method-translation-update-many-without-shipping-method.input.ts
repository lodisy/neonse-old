import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodTranslationCreateWithoutShippingMethodInput } from './shipping-method-translation-create-without-shipping-method.input';
import { ShippingMethodTranslationCreateOrConnectWithoutShippingMethodInput } from './shipping-method-translation-create-or-connect-without-shipping-method.input';
import { ShippingMethodTranslationUpsertWithWhereUniqueWithoutShippingMethodInput } from './shipping-method-translation-upsert-with-where-unique-without-shipping-method.input';
import { ShippingMethodTranslationCreateManyShippingMethodInputEnvelope } from './shipping-method-translation-create-many-shipping-method-input-envelope.input';
import { ShippingMethodTranslationWhereUniqueInput } from './shipping-method-translation-where-unique.input';
import { ShippingMethodTranslationUpdateWithWhereUniqueWithoutShippingMethodInput } from './shipping-method-translation-update-with-where-unique-without-shipping-method.input';
import { ShippingMethodTranslationUpdateManyWithWhereWithoutShippingMethodInput } from './shipping-method-translation-update-many-with-where-without-shipping-method.input';
import { ShippingMethodTranslationScalarWhereInput } from './shipping-method-translation-scalar-where.input';

@InputType()
export class ShippingMethodTranslationUpdateManyWithoutShippingMethodInput {

    @Field(() => [ShippingMethodTranslationCreateWithoutShippingMethodInput], {nullable:true})
    create?: Array<ShippingMethodTranslationCreateWithoutShippingMethodInput>;

    @Field(() => [ShippingMethodTranslationCreateOrConnectWithoutShippingMethodInput], {nullable:true})
    connectOrCreate?: Array<ShippingMethodTranslationCreateOrConnectWithoutShippingMethodInput>;

    @Field(() => [ShippingMethodTranslationUpsertWithWhereUniqueWithoutShippingMethodInput], {nullable:true})
    upsert?: Array<ShippingMethodTranslationUpsertWithWhereUniqueWithoutShippingMethodInput>;

    @Field(() => ShippingMethodTranslationCreateManyShippingMethodInputEnvelope, {nullable:true})
    createMany?: ShippingMethodTranslationCreateManyShippingMethodInputEnvelope;

    @Field(() => [ShippingMethodTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ShippingMethodTranslationWhereUniqueInput>;

    @Field(() => [ShippingMethodTranslationWhereUniqueInput], {nullable:true})
    set?: Array<ShippingMethodTranslationWhereUniqueInput>;

    @Field(() => [ShippingMethodTranslationWhereUniqueInput], {nullable:true})
    disconnect?: Array<ShippingMethodTranslationWhereUniqueInput>;

    @Field(() => [ShippingMethodTranslationWhereUniqueInput], {nullable:true})
    delete?: Array<ShippingMethodTranslationWhereUniqueInput>;

    @Field(() => [ShippingMethodTranslationUpdateWithWhereUniqueWithoutShippingMethodInput], {nullable:true})
    update?: Array<ShippingMethodTranslationUpdateWithWhereUniqueWithoutShippingMethodInput>;

    @Field(() => [ShippingMethodTranslationUpdateManyWithWhereWithoutShippingMethodInput], {nullable:true})
    updateMany?: Array<ShippingMethodTranslationUpdateManyWithWhereWithoutShippingMethodInput>;

    @Field(() => [ShippingMethodTranslationScalarWhereInput], {nullable:true})
    deleteMany?: Array<ShippingMethodTranslationScalarWhereInput>;
}
