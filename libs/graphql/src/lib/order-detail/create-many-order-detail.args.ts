import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderDetailCreateManyInput } from './order-detail-create-many.input';

@ArgsType()
export class CreateManyOrderDetailArgs {

    @Field(() => [OrderDetailCreateManyInput], {nullable:false})
    data!: Array<OrderDetailCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
