import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundUpdateInput } from './refund-update.input';
import { RefundWhereUniqueInput } from './refund-where-unique.input';

@ArgsType()
export class UpdateOneRefundArgs {

    @Field(() => RefundUpdateInput, {nullable:false})
    data!: RefundUpdateInput;

    @Field(() => RefundWhereUniqueInput, {nullable:false})
    where!: RefundWhereUniqueInput;
}
