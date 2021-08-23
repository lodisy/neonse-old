import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelWhereInput } from './channel-where.input';

@ArgsType()
export class DeleteManyChannelArgs {

    @Field(() => ChannelWhereInput, {nullable:true})
    where?: ChannelWhereInput;
}
