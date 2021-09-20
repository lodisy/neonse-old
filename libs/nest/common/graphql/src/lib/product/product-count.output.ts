import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductCount {

    @Field(() => Int, {nullable:false})
    assets!: number;

    @Field(() => Int, {nullable:false})
    brands!: number;

    @Field(() => Int, {nullable:false})
    types!: number;

    @Field(() => Int, {nullable:false})
    categories!: number;

    @Field(() => Int, {nullable:false})
    variants!: number;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    reviews!: number;

    @Field(() => Int, {nullable:false})
    translations!: number;
}
