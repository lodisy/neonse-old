import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';

@InputType()
export class RoleCreateOrConnectWithoutUserInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutUserInput, {nullable:false})
    create!: RoleCreateWithoutUserInput;
}
