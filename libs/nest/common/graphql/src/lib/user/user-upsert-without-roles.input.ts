import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRolesInput } from './user-update-without-roles.input';
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input';

@InputType()
export class UserUpsertWithoutRolesInput {

    @Field(() => UserUpdateWithoutRolesInput, {nullable:false})
    update!: UserUpdateWithoutRolesInput;

    @Field(() => UserCreateWithoutRolesInput, {nullable:false})
    create!: UserCreateWithoutRolesInput;
}
