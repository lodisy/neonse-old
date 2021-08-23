import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelUpdateManyMutationInput } from './channel-update-many-mutation.input';
import { ChannelWhereInput } from './channel-where.input';

@ArgsType()
export class UpdateManyChannelArgs {

    @Field(() => ChannelUpdateManyMutationInput, {nullable:false})
    data!: ChannelUpdateManyMutationInput;

    @Field(() => ChannelWhereInput, {nullable:true})
    where?: ChannelWhereInput;
}
