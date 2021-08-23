import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateManyImageInput } from './order-item-create-many-image.input';

@InputType()
export class OrderItemCreateManyImageInputEnvelope {

    @Field(() => [OrderItemCreateManyImageInput], {nullable:false})
    data!: Array<OrderItemCreateManyImageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
