import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleUncheckedCreateNestedManyWithoutUserInput } from '../role/role-unchecked-create-nested-many-without-user.input';
import { AuthenticationMethodUncheckedCreateNestedManyWithoutUserInput } from '../authentication-method/authentication-method-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(6)
    @Validator.MaxLength(10)
    password!: string;

    @Field(() => Date, {nullable:true})
    lastLoginAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => String, {nullable:false})
    @Validator.IsJWT()
    jwtToken!: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => String, {nullable:true})
    resetPasswordToken?: string;

    @Field(() => String, {nullable:true})
    identifierToken?: string;

    @Field(() => RoleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    roles?: RoleUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => AuthenticationMethodUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    authenticationMethods?: AuthenticationMethodUncheckedCreateNestedManyWithoutUserInput;
}
