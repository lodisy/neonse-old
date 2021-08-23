import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { Int } from '@nestjs/graphql';
import { Order } from '../order/order.model';

@ObjectType()
export class OrderItem {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    sku!: string;
    @Field(() => File, {nullable:false})
    image?: File;
    @Field(() => String, {nullable:false})
    brands!: string;
    @Field(() => String, {nullable:true})
    size!: string | null;
    @Field(() => String, {nullable:true})
    color!: string | null;
    @Field(() => String, {nullable:true})
    style!: string | null;
    @Field(() => Int, {nullable:false})
    unitPrice!: number;
    @Field(() => Int, {nullable:false})
    unitPriceWithTax!: number;
    @Field(() => Int, {nullable:false})
    discountedUnitPrice!: number;
    @Field(() => Int, {nullable:false})
    discountedUnitPriceWithTax!: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Order, {nullable:true})
    order?: Order;
    @Field(() => String, {nullable:true})
    orderId!: string | null;
    @Field(() => String, {nullable:false})
    fileId!: string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
