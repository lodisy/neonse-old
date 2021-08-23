import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChannelCreateManyInput } from './channel-create-many.input';

@ArgsType()
export class CreateManyChannelArgs {

    @Field(() => [ChannelCreateManyInput], {nullable:false})
    data!: Array<ChannelCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
