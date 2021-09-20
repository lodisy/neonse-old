import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductTypeCount {

    @Field(() => Int, {nullable:false})
    products!: number;

    @Field(() => Int, {nullable:false})
    categories!: number;

    @Field(() => Int, {nullable:false})
    translations!: number;
}
