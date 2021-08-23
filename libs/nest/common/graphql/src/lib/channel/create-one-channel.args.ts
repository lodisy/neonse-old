import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelCreateInput } from './channel-create.input';

@ArgsType()
export class CreateOneChannelArgs {

    @Field(() => ChannelCreateInput, {nullable:false})
    data!: ChannelCreateInput;
}
