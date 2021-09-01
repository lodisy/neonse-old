import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionCreateWithoutUserInput } from './permission-create-without-user.input';

@InputType()
export class PermissionCreateOrConnectWithoutUserInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionCreateWithoutUserInput, {nullable:false})
    create!: PermissionCreateWithoutUserInput;
}
