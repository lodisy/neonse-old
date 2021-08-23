import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticationMethodWhereInput } from './authentication-method-where.input';
import { AuthenticationMethodOrderByInput } from './authentication-method-order-by.input';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthenticationMethodCountAggregateInput } from './authentication-method-count-aggregate.input';
import { AuthenticationMethodMinAggregateInput } from './authentication-method-min-aggregate.input';
import { AuthenticationMethodMaxAggregateInput } from './authentication-method-max-aggregate.input';

@ArgsType()
export class AuthenticationMethodAggregateArgs {

    @Field(() => AuthenticationMethodWhereInput, {nullable:true})
    where?: AuthenticationMethodWhereInput;

    @Field(() => [AuthenticationMethodOrderByInput], {nullable:true})
    orderBy?: Array<AuthenticationMethodOrderByInput>;

    @Field(() => AuthenticationMethodWhereUniqueInput, {nullable:true})
    cursor?: AuthenticationMethodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AuthenticationMethodCountAggregateInput, {nullable:true})
    _count?: AuthenticationMethodCountAggregateInput;

    @Field(() => AuthenticationMethodMinAggregateInput, {nullable:true})
    _min?: AuthenticationMethodMinAggregateInput;

    @Field(() => AuthenticationMethodMaxAggregateInput, {nullable:true})
    _max?: AuthenticationMethodMaxAggregateInput;
}
