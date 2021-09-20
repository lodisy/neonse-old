import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByRelationAggregateInput } from '../role/role-order-by-relation-aggregate.input';
import { PermissionOrderByRelationAggregateInput } from '../permission/permission-order-by-relation-aggregate.input';
import { AuthenticationMethodOrderByRelationAggregateInput } from '../authentication-method/authentication-method-order-by-relation-aggregate.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isEmailConfirmed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isMobileConfirmed?: keyof typeof SortOrder;

    @Field(() => RoleOrderByRelationAggregateInput, {nullable:true})
    roles?: RoleOrderByRelationAggregateInput;

    @Field(() => PermissionOrderByRelationAggregateInput, {nullable:true})
    permissions?: PermissionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    lastLoginAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastLogoutAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customFields?: keyof typeof SortOrder;

    @Field(() => AuthenticationMethodOrderByRelationAggregateInput, {nullable:true})
    authenticationMethods?: AuthenticationMethodOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    accessToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refreshToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resetPasswordToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifierToken?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;
}
