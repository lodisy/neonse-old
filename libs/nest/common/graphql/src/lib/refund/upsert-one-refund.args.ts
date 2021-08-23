import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { RefundCreateInput } from './refund-create.input';
import { RefundUpdateInput } from './refund-update.input';

@ArgsType()
export class UpsertOneRefundArgs {

    @Field(() => RefundWhereUniqueInput, {nullable:false})
    where!: RefundWhereUniqueInput;

    @Field(() => RefundCreateInput, {nullable:false})
    create!: RefundCreateInput;

    @Field(() => RefundUpdateInput, {nullable:false})
    update!: RefundUpdateInput;
}
