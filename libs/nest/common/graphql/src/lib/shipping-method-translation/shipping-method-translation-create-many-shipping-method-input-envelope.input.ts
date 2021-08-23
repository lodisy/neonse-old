import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodTranslationCreateManyShippingMethodInput } from './shipping-method-translation-create-many-shipping-method.input';

@InputType()
export class ShippingMethodTranslationCreateManyShippingMethodInputEnvelope {

    @Field(() => [ShippingMethodTranslationCreateManyShippingMethodInput], {nullable:false})
    data!: Array<ShippingMethodTranslationCreateManyShippingMethodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
