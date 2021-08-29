import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Action } from '../prisma/action.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PermissionCountAggregate } from './permission-count-aggregate.output';
import { PermissionMinAggregate } from './permission-min-aggregate.output';
import { PermissionMaxAggregate } from './permission-max-aggregate.output';

@ObjectType()
export class PermissionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Action, {nullable:false})
    action!: keyof typeof Action;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => [String], {nullable:true})
    fields?: Array<string>;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions?: any;

    @Field(() => Boolean, {nullable:true})
    inverted?: boolean;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => PermissionCountAggregate, {nullable:true})
    _count?: PermissionCountAggregate;

    @Field(() => PermissionMinAggregate, {nullable:true})
    _min?: PermissionMinAggregate;

    @Field(() => PermissionMaxAggregate, {nullable:true})
    _max?: PermissionMaxAggregate;
}
