import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderUpdateInput } from './order-update.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@ArgsType()
export class UpdateOneOrderArgs {

    @Field(() => OrderUpdateInput, {nullable:false})
    data!: OrderUpdateInput;

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;
}
