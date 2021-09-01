import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithoutUserInput } from './permission-update-without-user.input';

@InputType()
export class PermissionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutUserInput, {nullable:false})
    data!: PermissionUpdateWithoutUserInput;
}
