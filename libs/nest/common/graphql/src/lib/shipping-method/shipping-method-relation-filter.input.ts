import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodWhereInput } from './shipping-method-where.input';

@InputType()
export class ShippingMethodRelationFilter {

    @Field(() => ShippingMethodWhereInput, {nullable:true})
    is?: ShippingMethodWhereInput;

    @Field(() => ShippingMethodWhereInput, {nullable:true})
    isNot?: ShippingMethodWhereInput;
}
