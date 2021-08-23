import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithoutProductVariantInput } from './channel-update-without-product-variant.input';

@InputType()
export class ChannelUpdateWithWhereUniqueWithoutProductVariantInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelUpdateWithoutProductVariantInput, {nullable:false})
    data!: ChannelUpdateWithoutProductVariantInput;
}
