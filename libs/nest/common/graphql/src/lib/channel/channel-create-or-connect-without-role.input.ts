import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelCreateWithoutRoleInput } from './channel-create-without-role.input';

@InputType()
export class ChannelCreateOrConnectWithoutRoleInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelCreateWithoutRoleInput, {nullable:false})
    create!: ChannelCreateWithoutRoleInput;
}
