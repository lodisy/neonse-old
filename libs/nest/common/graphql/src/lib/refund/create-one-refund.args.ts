import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundCreateInput } from './refund-create.input';

@ArgsType()
export class CreateOneRefundArgs {

    @Field(() => RefundCreateInput, {nullable:false})
    data!: RefundCreateInput;
}
