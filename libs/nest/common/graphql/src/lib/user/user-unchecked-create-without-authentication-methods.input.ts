import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleUncheckedCreateNestedManyWithoutUserInput } from '../role/role-unchecked-create-nested-many-without-user.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutAuthenticationMethodsInput {

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
    @Validator.IsMobilePhone()
    mobile?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(6)
    @Validator.MaxLength(10)
    password!: string;

    @Field(() => Boolean, {nullable:true})
    isEmailConfirmed?: boolean;

    @Field(() => Boolean, {nullable:true})
    isMobileConfirmed?: boolean;

    @Field(() => Date, {nullable:true})
    lastLoginAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastLogoutAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => String, {nullable:false})
    @Validator.IsJWT()
    accessToken!: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => String, {nullable:true})
    resetPasswordToken?: string;

    @Field(() => String, {nullable:true})
    identifierToken?: string;

    @Field(() => RoleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    roles?: RoleUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
}
