import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationStrategy } from './authentication-strategy.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAuthenticationStrategyFilter } from './nested-enum-authentication-strategy-filter.input';

@InputType()
export class NestedEnumAuthenticationStrategyWithAggregatesFilter {

    @Field(() => AuthenticationStrategy, {nullable:true})
    equals?: keyof typeof AuthenticationStrategy;

    @Field(() => [AuthenticationStrategy], {nullable:true})
    in?: Array<keyof typeof AuthenticationStrategy>;

    @Field(() => [AuthenticationStrategy], {nullable:true})
    notIn?: Array<keyof typeof AuthenticationStrategy>;

    @Field(() => NestedEnumAuthenticationStrategyWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAuthenticationStrategyWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    count?: NestedIntFilter;

    @Field(() => NestedEnumAuthenticationStrategyFilter, {nullable:true})
    _min?: NestedEnumAuthenticationStrategyFilter;

    @Field(() => NestedEnumAuthenticationStrategyFilter, {nullable:true})
    min?: NestedEnumAuthenticationStrategyFilter;

    @Field(() => NestedEnumAuthenticationStrategyFilter, {nullable:true})
    _max?: NestedEnumAuthenticationStrategyFilter;

    @Field(() => NestedEnumAuthenticationStrategyFilter, {nullable:true})
    max?: NestedEnumAuthenticationStrategyFilter;
}
