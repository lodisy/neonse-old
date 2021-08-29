import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PermissionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    action!: number;

    @Field(() => Int, {nullable:false})
    subject!: number;

    @Field(() => Int, {nullable:false})
    fields!: number;

    @Field(() => Int, {nullable:false})
    conditions!: number;

    @Field(() => Int, {nullable:false})
    inverted!: number;

    @Field(() => Int, {nullable:false})
    reason!: number;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
