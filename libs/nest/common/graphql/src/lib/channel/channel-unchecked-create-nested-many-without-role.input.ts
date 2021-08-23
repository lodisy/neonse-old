import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutRoleInput } from './channel-create-without-role.input';
import { ChannelCreateOrConnectWithoutRoleInput } from './channel-create-or-connect-without-role.input';
import { ChannelCreateManyRoleInputEnvelope } from './channel-create-many-role-input-envelope.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';

@InputType()
export class ChannelUncheckedCreateNestedManyWithoutRoleInput {

    @Field(() => [ChannelCreateWithoutRoleInput], {nullable:true})
    create?: Array<ChannelCreateWithoutRoleInput>;

    @Field(() => [ChannelCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<ChannelCreateOrConnectWithoutRoleInput>;

    @Field(() => ChannelCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: ChannelCreateManyRoleInputEnvelope;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    connect?: Array<ChannelWhereUniqueInput>;
}
