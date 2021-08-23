import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumAuthenticationStrategyFilter } from '../prisma/enum-authentication-strategy-filter.input';

@InputType()
export class AuthenticationMethodScalarWhereInput {

    @Field(() => [AuthenticationMethodScalarWhereInput], {nullable:true})
    AND?: Array<AuthenticationMethodScalarWhereInput>;

    @Field(() => [AuthenticationMethodScalarWhereInput], {nullable:true})
    OR?: Array<AuthenticationMethodScalarWhereInput>;

    @Field(() => [AuthenticationMethodScalarWhereInput], {nullable:true})
    NOT?: Array<AuthenticationMethodScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumAuthenticationStrategyFilter, {nullable:true})
    strategy?: EnumAuthenticationStrategyFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
