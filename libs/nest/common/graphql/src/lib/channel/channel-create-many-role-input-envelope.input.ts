import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateManyRoleInput } from './channel-create-many-role.input';

@InputType()
export class ChannelCreateManyRoleInputEnvelope {

    @Field(() => [ChannelCreateManyRoleInput], {nullable:false})
    data!: Array<ChannelCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
