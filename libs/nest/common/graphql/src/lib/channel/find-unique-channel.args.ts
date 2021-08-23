import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';

@ArgsType()
export class FindUniqueChannelArgs {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;
}
