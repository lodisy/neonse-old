import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelScalarWhereInput } from './channel-scalar-where.input';
import { ChannelUpdateManyMutationInput } from './channel-update-many-mutation.input';

@InputType()
export class ChannelUpdateManyWithWhereWithoutProductVariantInput {

    @Field(() => ChannelScalarWhereInput, {nullable:false})
    where!: ChannelScalarWhereInput;

    @Field(() => ChannelUpdateManyMutationInput, {nullable:false})
    data!: ChannelUpdateManyMutationInput;
}
