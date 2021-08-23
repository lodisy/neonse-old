import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundWhereUniqueInput } from './refund-where-unique.input';

@ArgsType()
export class DeleteOneRefundArgs {

    @Field(() => RefundWhereUniqueInput, {nullable:false})
    where!: RefundWhereUniqueInput;
}
