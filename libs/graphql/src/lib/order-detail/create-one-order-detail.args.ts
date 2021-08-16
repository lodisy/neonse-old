import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderDetailCreateInput } from './order-detail-create.input';

@ArgsType()
export class CreateOneOrderDetailArgs {

    @Field(() => OrderDetailCreateInput, {nullable:false})
    data!: OrderDetailCreateInput;
}
