import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumAuthenticationStrategyFilter } from '../prisma/enum-authentication-strategy-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class AuthenticationMethodWhereInput {

    @Field(() => [AuthenticationMethodWhereInput], {nullable:true})
    AND?: Array<AuthenticationMethodWhereInput>;

    @Field(() => [AuthenticationMethodWhereInput], {nullable:true})
    OR?: Array<AuthenticationMethodWhereInput>;

    @Field(() => [AuthenticationMethodWhereInput], {nullable:true})
    NOT?: Array<AuthenticationMethodWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumAuthenticationStrategyFilter, {nullable:true})
    strategy?: EnumAuthenticationStrategyFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
