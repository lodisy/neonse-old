import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundCreateManyInput } from './refund-create-many.input';

@ArgsType()
export class CreateManyRefundArgs {

    @Field(() => [RefundCreateManyInput], {nullable:false})
    data!: Array<RefundCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
