import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleCreateNestedManyWithoutUserInput } from '../role/role-create-nested-many-without-user.input';
import { PermissionCreateNestedManyWithoutUserInput } from '../permission/permission-create-nested-many-without-user.input';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutAuthenticationMethodsInput {

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

    @Field(() => String, {nullable:true})
    @Validator.IsJWT()
    accessToken?: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => String, {nullable:true})
    resetPasswordToken?: string;

    @Field(() => String, {nullable:true})
    identifierToken?: string;

    @Field(() => RoleCreateNestedManyWithoutUserInput, {nullable:true})
    roles?: RoleCreateNestedManyWithoutUserInput;

    @Field(() => PermissionCreateNestedManyWithoutUserInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutUserInput;

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUserInput;
}
