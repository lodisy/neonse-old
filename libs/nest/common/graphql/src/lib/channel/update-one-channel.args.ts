import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelUpdateInput } from './channel-update.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';

@ArgsType()
export class UpdateOneChannelArgs {

    @Field(() => ChannelUpdateInput, {nullable:false})
    data!: ChannelUpdateInput;

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;
}
