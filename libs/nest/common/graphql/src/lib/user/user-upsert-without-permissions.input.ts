import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPermissionsInput } from './user-update-without-permissions.input';
import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';

@InputType()
export class UserUpsertWithoutPermissionsInput {

    @Field(() => UserUpdateWithoutPermissionsInput, {nullable:false})
    update!: UserUpdateWithoutPermissionsInput;

    @Field(() => UserCreateWithoutPermissionsInput, {nullable:false})
    create!: UserCreateWithoutPermissionsInput;
}
