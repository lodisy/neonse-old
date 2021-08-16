import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateInput } from './order-create.input';
import { OrderUpdateInput } from './order-update.input';

@ArgsType()
export class UpsertOneOrderArgs {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateInput, {nullable:false})
    create!: OrderCreateInput;

    @Field(() => OrderUpdateInput, {nullable:false})
    update!: OrderUpdateInput;
}
