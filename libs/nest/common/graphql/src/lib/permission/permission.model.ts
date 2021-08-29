import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Action } from '../prisma/action.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Role } from '../role/role.model';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Action, {nullable:false})
    action!: keyof typeof Action;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => [String], {nullable:true})
    fields!: Array<string>;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions!: any | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    inverted!: boolean | null;

    @Field(() => String, {nullable:true})
    reason!: string | null;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => String, {nullable:false})
    roleId!: string;
}
