import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderAddressWhereInput } from './order-address-where.input';

@InputType()
export class OrderAddressRelationFilter {

    @Field(() => OrderAddressWhereInput, {nullable:true})
    is?: OrderAddressWhereInput;

    @Field(() => OrderAddressWhereInput, {nullable:true})
    isNot?: OrderAddressWhereInput;
}
