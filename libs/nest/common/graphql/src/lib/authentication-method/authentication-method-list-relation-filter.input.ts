import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationMethodWhereInput } from './authentication-method-where.input';

@InputType()
export class AuthenticationMethodListRelationFilter {

    @Field(() => AuthenticationMethodWhereInput, {nullable:true})
    every?: AuthenticationMethodWhereInput;

    @Field(() => AuthenticationMethodWhereInput, {nullable:true})
    some?: AuthenticationMethodWhereInput;

    @Field(() => AuthenticationMethodWhereInput, {nullable:true})
    none?: AuthenticationMethodWhereInput;
}
