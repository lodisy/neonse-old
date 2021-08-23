import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodTranslationCreateManyInput } from './shipping-method-translation-create-many.input';

@ArgsType()
export class CreateManyShippingMethodTranslationArgs {

    @Field(() => [ShippingMethodTranslationCreateManyInput], {nullable:false})
    data!: Array<ShippingMethodTranslationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
