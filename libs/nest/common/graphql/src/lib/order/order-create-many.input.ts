import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class OrderCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    placedAt!: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Boolean, {nullable:true})
    pending?: boolean;

    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;

    @Field(() => Int, {nullable:false})
    totalQuantity!: number;

    @Field(() => Int, {nullable:false})
    subTotal!: number;

    @Field(() => Int, {nullable:false})
    subTotalWithTax!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    totalWithTax!: number;

    @Field(() => String, {nullable:true})
    tracking?: string;
}
