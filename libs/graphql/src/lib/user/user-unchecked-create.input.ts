import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreaterolesInput } from '../prisma/user-createroles.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @HideField()
    password!: string;

    @HideField()
    jwtToken!: string;

    @HideField()
    resetPasswordToken!: string;

    @HideField()
    identifierToken!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    roles?: UserCreaterolesInput;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
}
