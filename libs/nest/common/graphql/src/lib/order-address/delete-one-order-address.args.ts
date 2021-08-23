import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderAddressWhereUniqueInput } from './order-address-where-unique.input';

@ArgsType()
export class DeleteOneOrderAddressArgs {

    @Field(() => OrderAddressWhereUniqueInput, {nullable:false})
    where!: OrderAddressWhereUniqueInput;
}
