import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelCreateInput } from './channel-create.input';
import { ChannelUpdateInput } from './channel-update.input';

@ArgsType()
export class UpsertOneChannelArgs {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelCreateInput, {nullable:false})
    create!: ChannelCreateInput;

    @Field(() => ChannelUpdateInput, {nullable:false})
    update!: ChannelUpdateInput;
}
