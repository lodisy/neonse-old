import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';

@ArgsType()
export class DeleteManyOrderArgs {

    @Field(() => OrderWhereInput, {nullable:true})
    where?: OrderWhereInput;
}
