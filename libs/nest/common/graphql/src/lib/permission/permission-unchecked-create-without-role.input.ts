import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Action } from '../prisma/action.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PermissionCreatefieldsInput } from '../prisma/permission-createfields.input';

@InputType()
export class PermissionUncheckedCreateWithoutRoleInput {

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

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => PermissionCreatefieldsInput, {nullable:true})
    fields?: PermissionCreatefieldsInput;
}
