import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    sku!: number;

    @Field(() => Int, {nullable:false})
    images!: number;

    @Field(() => Int, {nullable:false})
    discription!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    featured!: number;

    @Field(() => Int, {nullable:false})
    draft!: number;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Int, {nullable:false})
    sold!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
