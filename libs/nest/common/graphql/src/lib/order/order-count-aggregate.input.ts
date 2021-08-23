import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    placedAt?: true;

    @Field(() => Boolean, {nullable:true})
    code?: true;

    @Field(() => Boolean, {nullable:true})
    pending?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    totalQuantity?: true;

    @Field(() => Boolean, {nullable:true})
    subTotal?: true;

    @Field(() => Boolean, {nullable:true})
    subTotalWithTax?: true;

    @Field(() => Boolean, {nullable:true})
    total?: true;

    @Field(() => Boolean, {nullable:true})
    totalWithTax?: true;

    @Field(() => Boolean, {nullable:true})
    tracking?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
