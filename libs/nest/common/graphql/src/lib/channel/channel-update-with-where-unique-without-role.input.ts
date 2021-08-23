import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithoutRoleInput } from './channel-update-without-role.input';

@InputType()
export class ChannelUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelUpdateWithoutRoleInput, {nullable:false})
    data!: ChannelUpdateWithoutRoleInput;
}
