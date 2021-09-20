import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodTranslationWhereInput } from './shipping-method-translation-where.input';
import { ShippingMethodTranslationOrderByWithRelationInput } from './shipping-method-translation-order-by-with-relation.input';
import { ShippingMethodTranslationWhereUniqueInput } from './shipping-method-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShippingMethodTranslationScalarFieldEnum } from './shipping-method-translation-scalar-field.enum';

@ArgsType()
export class FindFirstShippingMethodTranslationArgs {

    @Field(() => ShippingMethodTranslationWhereInput, {nullable:true})
    where?: ShippingMethodTranslationWhereInput;

    @Field(() => [ShippingMethodTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShippingMethodTranslationOrderByWithRelationInput>;

    @Field(() => ShippingMethodTranslationWhereUniqueInput, {nullable:true})
    cursor?: ShippingMethodTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShippingMethodTranslationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShippingMethodTranslationScalarFieldEnum>;
}
