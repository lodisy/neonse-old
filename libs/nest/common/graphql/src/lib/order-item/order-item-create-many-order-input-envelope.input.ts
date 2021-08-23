import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateManyOrderInput } from './order-item-create-many-order.input';

@InputType()
export class OrderItemCreateManyOrderInputEnvelope {

    @Field(() => [OrderItemCreateManyOrderInput], {nullable:false})
    data!: Array<OrderItemCreateManyOrderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
