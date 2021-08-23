import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationStrategy } from './authentication-strategy.enum';

@InputType()
export class NestedEnumAuthenticationStrategyFilter {

    @Field(() => AuthenticationStrategy, {nullable:true})
    equals?: keyof typeof AuthenticationStrategy;

    @Field(() => [AuthenticationStrategy], {nullable:true})
    in?: Array<keyof typeof AuthenticationStrategy>;

    @Field(() => [AuthenticationStrategy], {nullable:true})
    notIn?: Array<keyof typeof AuthenticationStrategy>;

    @Field(() => NestedEnumAuthenticationStrategyFilter, {nullable:true})
    not?: NestedEnumAuthenticationStrategyFilter;
}
