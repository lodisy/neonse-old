import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthenticationStrategy } from '../prisma/authentication-strategy.enum';

@ObjectType()
export class AuthenticationMethodMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AuthenticationStrategy, {nullable:true})
    strategy?: keyof typeof AuthenticationStrategy;

    @Field(() => String, {nullable:true})
    userId?: string;
}
