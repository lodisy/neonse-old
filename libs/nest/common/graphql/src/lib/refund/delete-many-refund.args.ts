import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundWhereInput } from './refund-where.input';

@ArgsType()
export class DeleteManyRefundArgs {

    @Field(() => RefundWhereInput, {nullable:true})
    where?: RefundWhereInput;
}
