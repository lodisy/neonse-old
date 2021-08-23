import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';
import { RoleCreateOrConnectWithoutUserInput } from './role-create-or-connect-without-user.input';
import { RoleCreateManyUserInputEnvelope } from './role-create-many-user-input-envelope.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedManyWithoutUserInput {

    @Field(() => [RoleCreateWithoutUserInput], {nullable:true})
    create?: Array<RoleCreateWithoutUserInput>;

    @Field(() => [RoleCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUserInput>;

    @Field(() => RoleCreateManyUserInputEnvelope, {nullable:true})
    createMany?: RoleCreateManyUserInputEnvelope;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    connect?: Array<RoleWhereUniqueInput>;
}
