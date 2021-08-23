import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemScalarWhereInput } from './order-item-scalar-where.input';
import { OrderItemUpdateManyMutationInput } from './order-item-update-many-mutation.input';

@InputType()
export class OrderItemUpdateManyWithWhereWithoutOrderInput {

    @Field(() => OrderItemScalarWhereInput, {nullable:false})
    where!: OrderItemScalarWhereInput;

    @Field(() => OrderItemUpdateManyMutationInput, {nullable:false})
    data!: OrderItemUpdateManyMutationInput;
}
