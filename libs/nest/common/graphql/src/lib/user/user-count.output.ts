import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    roles!: number;

    @Field(() => Int, {nullable:false})
    permissions!: number;

    @Field(() => Int, {nullable:false})
    authenticationMethods!: number;
}
