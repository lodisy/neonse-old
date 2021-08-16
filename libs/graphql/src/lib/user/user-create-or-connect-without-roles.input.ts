import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input';

@InputType()
export class UserCreateOrConnectWithoutRolesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRolesInput, {nullable:false})
    create!: UserCreateWithoutRolesInput;
}
