import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundUpdateManyMutationInput } from './refund-update-many-mutation.input';
import { RefundWhereInput } from './refund-where.input';

@ArgsType()
export class UpdateManyRefundArgs {

    @Field(() => RefundUpdateManyMutationInput, {nullable:false})
    data!: RefundUpdateManyMutationInput;

    @Field(() => RefundWhereInput, {nullable:true})
    where?: RefundWhereInput;
}
