import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentMethod } from '../prisma/payment-method.enum';

@ObjectType()
export class PaymentMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PaymentMethod, {nullable:true})
    method?: keyof typeof PaymentMethod;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    transactionId?: string;

    @Field(() => String, {nullable:true})
    errorMessage?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;
}
