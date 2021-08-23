import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelCreateWithoutProductVariantInput } from './channel-create-without-product-variant.input';

@InputType()
export class ChannelCreateOrConnectWithoutProductVariantInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelCreateWithoutProductVariantInput, {nullable:false})
    create!: ChannelCreateWithoutProductVariantInput;
}
