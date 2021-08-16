import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@ArgsType()
export class DeleteOneOrderArgs {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;
}
