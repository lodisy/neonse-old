import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderDetailWhereUniqueInput } from './order-detail-where-unique.input';
import { OrderDetailCreateInput } from './order-detail-create.input';
import { OrderDetailUpdateInput } from './order-detail-update.input';

@ArgsType()
export class UpsertOneOrderDetailArgs {

    @Field(() => OrderDetailWhereUniqueInput, {nullable:false})
    where!: OrderDetailWhereUniqueInput;

    @Field(() => OrderDetailCreateInput, {nullable:false})
    create!: OrderDetailCreateInput;

    @Field(() => OrderDetailUpdateInput, {nullable:false})
    update!: OrderDetailUpdateInput;
}
