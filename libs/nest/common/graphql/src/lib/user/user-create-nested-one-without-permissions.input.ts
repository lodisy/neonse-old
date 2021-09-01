import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';
import { UserCreateOrConnectWithoutPermissionsInput } from './user-create-or-connect-without-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPermissionsInput {

    @Field(() => UserCreateWithoutPermissionsInput, {nullable:true})
    create?: UserCreateWithoutPermissionsInput;

    @Field(() => UserCreateOrConnectWithoutPermissionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
