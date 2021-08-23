import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodTranslationWhereInput } from './shipping-method-translation-where.input';
import { ShippingMethodTranslationOrderByInput } from './shipping-method-translation-order-by.input';
import { ShippingMethodTranslationWhereUniqueInput } from './shipping-method-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShippingMethodTranslationScalarFieldEnum } from './shipping-method-translation-scalar-field.enum';

@ArgsType()
export class FindFirstShippingMethodTranslationArgs {

    @Field(() => ShippingMethodTranslationWhereInput, {nullable:true})
    where?: ShippingMethodTranslationWhereInput;

    @Field(() => [ShippingMethodTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ShippingMethodTranslationOrderByInput>;

    @Field(() => ShippingMethodTranslationWhereUniqueInput, {nullable:true})
    cursor?: ShippingMethodTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShippingMethodTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShippingMethodTranslationScalarFieldEnum>;
}
