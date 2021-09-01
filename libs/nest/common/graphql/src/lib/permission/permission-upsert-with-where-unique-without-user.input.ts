import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithoutUserInput } from './permission-update-without-user.input';
import { PermissionCreateWithoutUserInput } from './permission-create-without-user.input';

@InputType()
export class PermissionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutUserInput, {nullable:false})
    update!: PermissionUpdateWithoutUserInput;

    @Field(() => PermissionCreateWithoutUserInput, {nullable:false})
    create!: PermissionCreateWithoutUserInput;
}
