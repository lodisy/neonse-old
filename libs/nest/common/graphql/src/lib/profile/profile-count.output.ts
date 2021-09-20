import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileCount {

    @Field(() => Int, {nullable:false})
    brands!: number;

    @Field(() => Int, {nullable:false})
    addresses!: number;

    @Field(() => Int, {nullable:false})
    cards!: number;

    @Field(() => Int, {nullable:false})
    comments!: number;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    reviews!: number;

    @Field(() => Int, {nullable:false})
    uploads!: number;

    @Field(() => Int, {nullable:false})
    followedBy!: number;

    @Field(() => Int, {nullable:false})
    following!: number;

    @Field(() => Int, {nullable:false})
    messagesSent!: number;

    @Field(() => Int, {nullable:false})
    messagesReceived!: number;
}
