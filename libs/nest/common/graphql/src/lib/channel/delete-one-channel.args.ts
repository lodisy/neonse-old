import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';

@ArgsType()
export class DeleteOneChannelArgs {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;
}
