import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthenticationMethodCountAggregate } from './authentication-method-count-aggregate.output';
import { AuthenticationMethodMinAggregate } from './authentication-method-min-aggregate.output';
import { AuthenticationMethodMaxAggregate } from './authentication-method-max-aggregate.output';

@ObjectType()
export class AggregateAuthenticationMethod {

    @Field(() => AuthenticationMethodCountAggregate, {nullable:true})
    _count?: AuthenticationMethodCountAggregate;

    @Field(() => AuthenticationMethodMinAggregate, {nullable:true})
    _min?: AuthenticationMethodMinAggregate;

    @Field(() => AuthenticationMethodMaxAggregate, {nullable:true})
    _max?: AuthenticationMethodMaxAggregate;
}
