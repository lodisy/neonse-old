import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';
import { RoleCreateOrConnectWithoutUserInput } from './role-create-or-connect-without-user.input';
import { RoleUpsertWithWhereUniqueWithoutUserInput } from './role-upsert-with-where-unique-without-user.input';
import { RoleCreateManyUserInputEnvelope } from './role-create-many-user-input-envelope.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithWhereUniqueWithoutUserInput } from './role-update-with-where-unique-without-user.input';
import { RoleUpdateManyWithWhereWithoutUserInput } from './role-update-many-with-where-without-user.input';
import { RoleScalarWhereInput } from './role-scalar-where.input';

@InputType()
export class RoleUpdateManyWithoutUserInput {

    @Field(() => [RoleCreateWithoutUserInput], {nullable:true})
    create?: Array<RoleCreateWithoutUserInput>;

    @Field(() => [RoleCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUserInput>;

    @Field(() => [RoleUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<RoleUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => RoleCreateManyUserInputEnvelope, {nullable:true})
    createMany?: RoleCreateManyUserInputEnvelope;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    connect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    set?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    disconnect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    delete?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<RoleUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [RoleUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<RoleUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    deleteMany?: Array<RoleScalarWhereInput>;
}
