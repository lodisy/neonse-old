import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Item {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
}
