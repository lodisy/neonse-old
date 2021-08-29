import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Action } from '../prisma/action.enum';

@ObjectType()
export class PermissionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Action, {nullable:true})
    action?: keyof typeof Action;

    @Field(() => String, {nullable:true})
    subject?: string;

    @Field(() => Boolean, {nullable:true})
    inverted?: boolean;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => String, {nullable:true})
    roleId?: string;
}
