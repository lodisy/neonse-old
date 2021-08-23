import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutUserInput } from './role-update-without-user.input';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';

@InputType()
export class RoleUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutUserInput, {nullable:false})
    update!: RoleUpdateWithoutUserInput;

    @Field(() => RoleCreateWithoutUserInput, {nullable:false})
    create!: RoleCreateWithoutUserInput;
}
