import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Action } from '../prisma/action.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PermissionCreateManyfieldsInput } from './permission-create-manyfields.input';

@InputType()
export class PermissionCreateManyRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Action, {nullable:false})
    action!: keyof typeof Action;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions?: any;

    @Field(() => Boolean, {nullable:true})
    inverted?: boolean;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => PermissionCreateManyfieldsInput, {nullable:true})
    fields?: PermissionCreateManyfieldsInput;
}
