import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';
import { UserCreateOrConnectWithoutPermissionsInput } from './user-create-or-connect-without-permissions.input';
import { UserUpsertWithoutPermissionsInput } from './user-upsert-without-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPermissionsInput } from './user-update-without-permissions.input';

@InputType()
export class UserUpdateOneRequiredWithoutPermissionsInput {

    @Field(() => UserCreateWithoutPermissionsInput, {nullable:true})
    create?: UserCreateWithoutPermissionsInput;

    @Field(() => UserCreateOrConnectWithoutPermissionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput;

    @Field(() => UserUpsertWithoutPermissionsInput, {nullable:true})
    upsert?: UserUpsertWithoutPermissionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPermissionsInput, {nullable:true})
    update?: UserUpdateWithoutPermissionsInput;
}
