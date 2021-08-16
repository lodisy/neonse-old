import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderCreateInput } from './order-create.input';

@ArgsType()
export class CreateOneOrderArgs {

    @Field(() => OrderCreateInput, {nullable:false})
    data!: OrderCreateInput;
}
