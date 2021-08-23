import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticationMethodWhereInput } from './authentication-method-where.input';
import { AuthenticationMethodOrderByInput } from './authentication-method-order-by.input';
import { AuthenticationMethodScalarFieldEnum } from './authentication-method-scalar-field.enum';
import { AuthenticationMethodScalarWhereWithAggregatesInput } from './authentication-method-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AuthenticationMethodCountAggregateInput } from './authentication-method-count-aggregate.input';
import { AuthenticationMethodMinAggregateInput } from './authentication-method-min-aggregate.input';
import { AuthenticationMethodMaxAggregateInput } from './authentication-method-max-aggregate.input';

@ArgsType()
export class AuthenticationMethodGroupByArgs {

    @Field(() => AuthenticationMethodWhereInput, {nullable:true})
    where?: AuthenticationMethodWhereInput;

    @Field(() => [AuthenticationMethodOrderByInput], {nullable:true})
    orderBy?: Array<AuthenticationMethodOrderByInput>;

    @Field(() => [AuthenticationMethodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AuthenticationMethodScalarFieldEnum>;

    @Field(() => AuthenticationMethodScalarWhereWithAggregatesInput, {nullable:true})
    having?: AuthenticationMethodScalarWhereWithAggregatesInput;

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
