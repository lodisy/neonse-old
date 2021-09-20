import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductCategoryCount {

    @Field(() => Int, {nullable:false})
    children!: number;

    @Field(() => Int, {nullable:false})
    products!: number;

    @Field(() => Int, {nullable:false})
    types!: number;

    @Field(() => Int, {nullable:false})
    translations!: number;
}
