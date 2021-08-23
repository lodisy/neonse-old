import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumAuthenticationStrategyWithAggregatesFilter } from '../prisma/enum-authentication-strategy-with-aggregates-filter.input';

@InputType()
export class AuthenticationMethodScalarWhereWithAggregatesInput {

    @Field(() => [AuthenticationMethodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthenticationMethodScalarWhereWithAggregatesInput>;

    @Field(() => [AuthenticationMethodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthenticationMethodScalarWhereWithAggregatesInput>;

    @Field(() => [AuthenticationMethodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthenticationMethodScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumAuthenticationStrategyWithAggregatesFilter, {nullable:true})
    strategy?: EnumAuthenticationStrategyWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
