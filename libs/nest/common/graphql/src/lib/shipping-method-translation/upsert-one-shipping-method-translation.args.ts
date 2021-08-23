import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodTranslationWhereUniqueInput } from './shipping-method-translation-where-unique.input';
import { ShippingMethodTranslationCreateInput } from './shipping-method-translation-create.input';
import { ShippingMethodTranslationUpdateInput } from './shipping-method-translation-update.input';

@ArgsType()
export class UpsertOneShippingMethodTranslationArgs {

    @Field(() => ShippingMethodTranslationWhereUniqueInput, {nullable:false})
    where!: ShippingMethodTranslationWhereUniqueInput;

    @Field(() => ShippingMethodTranslationCreateInput, {nullable:false})
    create!: ShippingMethodTranslationCreateInput;

    @Field(() => ShippingMethodTranslationUpdateInput, {nullable:false})
    update!: ShippingMethodTranslationUpdateInput;
}
