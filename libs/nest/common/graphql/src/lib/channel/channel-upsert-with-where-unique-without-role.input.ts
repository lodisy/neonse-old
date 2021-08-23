import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithoutRoleInput } from './channel-update-without-role.input';
import { ChannelCreateWithoutRoleInput } from './channel-create-without-role.input';

@InputType()
export class ChannelUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelUpdateWithoutRoleInput, {nullable:false})
    update!: ChannelUpdateWithoutRoleInput;

    @Field(() => ChannelCreateWithoutRoleInput, {nullable:false})
    create!: ChannelCreateWithoutRoleInput;
}
