import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderAddressWhereInput } from './order-address-where.input';

@ArgsType()
export class DeleteManyOrderAddressArgs {

    @Field(() => OrderAddressWhereInput, {nullable:true})
    where?: OrderAddressWhereInput;
}
