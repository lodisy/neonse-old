import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CardCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:false})
    number!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    expiration!: number;

    @Field(() => Int, {nullable:false})
    bank!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
