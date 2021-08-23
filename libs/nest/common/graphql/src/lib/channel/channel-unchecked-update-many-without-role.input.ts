import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutRoleInput } from './channel-create-without-role.input';
import { ChannelCreateOrConnectWithoutRoleInput } from './channel-create-or-connect-without-role.input';
import { ChannelUpsertWithWhereUniqueWithoutRoleInput } from './channel-upsert-with-where-unique-without-role.input';
import { ChannelCreateManyRoleInputEnvelope } from './channel-create-many-role-input-envelope.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithWhereUniqueWithoutRoleInput } from './channel-update-with-where-unique-without-role.input';
import { ChannelUpdateManyWithWhereWithoutRoleInput } from './channel-update-many-with-where-without-role.input';
import { ChannelScalarWhereInput } from './channel-scalar-where.input';

@InputType()
export class ChannelUncheckedUpdateManyWithoutRoleInput {

    @Field(() => [ChannelCreateWithoutRoleInput], {nullable:true})
    create?: Array<ChannelCreateWithoutRoleInput>;

    @Field(() => [ChannelCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<ChannelCreateOrConnectWithoutRoleInput>;

    @Field(() => [ChannelUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    upsert?: Array<ChannelUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => ChannelCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: ChannelCreateManyRoleInputEnvelope;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    connect?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    set?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    disconnect?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    delete?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    update?: Array<ChannelUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [ChannelUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    updateMany?: Array<ChannelUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [ChannelScalarWhereInput], {nullable:true})
    deleteMany?: Array<ChannelScalarWhereInput>;
}
