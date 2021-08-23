import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthenticationStrategy } from '../prisma/authentication-strategy.enum';
import { AuthenticationMethodCountAggregate } from './authentication-method-count-aggregate.output';
import { AuthenticationMethodMinAggregate } from './authentication-method-min-aggregate.output';
import { AuthenticationMethodMaxAggregate } from './authentication-method-max-aggregate.output';

@ObjectType()
export class AuthenticationMethodGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AuthenticationStrategy, {nullable:false})
    strategy!: keyof typeof AuthenticationStrategy;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => AuthenticationMethodCountAggregate, {nullable:true})
    _count?: AuthenticationMethodCountAggregate;

    @Field(() => AuthenticationMethodMinAggregate, {nullable:true})
    _min?: AuthenticationMethodMinAggregate;

    @Field(() => AuthenticationMethodMaxAggregate, {nullable:true})
    _max?: AuthenticationMethodMaxAggregate;
}
