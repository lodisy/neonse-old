import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderAddressWhereUniqueInput } from './order-address-where-unique.input';
import { OrderAddressCreateInput } from './order-address-create.input';
import { OrderAddressUpdateInput } from './order-address-update.input';

@ArgsType()
export class UpsertOneOrderAddressArgs {

    @Field(() => OrderAddressWhereUniqueInput, {nullable:false})
    where!: OrderAddressWhereUniqueInput;

    @Field(() => OrderAddressCreateInput, {nullable:false})
    create!: OrderAddressCreateInput;

    @Field(() => OrderAddressUpdateInput, {nullable:false})
    update!: OrderAddressUpdateInput;
}
