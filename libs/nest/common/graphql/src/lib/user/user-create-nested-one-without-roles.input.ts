import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input';
import { UserCreateOrConnectWithoutRolesInput } from './user-create-or-connect-without-roles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRolesInput {

    @Field(() => UserCreateWithoutRolesInput, {nullable:true})
    create?: UserCreateWithoutRolesInput;

    @Field(() => UserCreateOrConnectWithoutRolesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
