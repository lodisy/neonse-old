import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutUserInput } from './role-update-without-user.input';

@InputType()
export class RoleUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutUserInput, {nullable:false})
    data!: RoleUpdateWithoutUserInput;
}
