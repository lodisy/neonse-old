import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class OrderItemUncheckedCreateWithoutImageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => String, {nullable:false})
    brands!: string;

    @Field(() => String, {nullable:true})
    size?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    style?: string;

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

    @Field(() => String, {nullable:true})
    orderId?: string;
}
