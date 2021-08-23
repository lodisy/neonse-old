import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutProductVariantInput } from './channel-create-without-product-variant.input';
import { ChannelCreateOrConnectWithoutProductVariantInput } from './channel-create-or-connect-without-product-variant.input';
import { ChannelCreateManyProductVariantInputEnvelope } from './channel-create-many-product-variant-input-envelope.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';

@InputType()
export class ChannelUncheckedCreateNestedManyWithoutProductVariantInput {

    @Field(() => [ChannelCreateWithoutProductVariantInput], {nullable:true})
    create?: Array<ChannelCreateWithoutProductVariantInput>;

    @Field(() => [ChannelCreateOrConnectWithoutProductVariantInput], {nullable:true})
    connectOrCreate?: Array<ChannelCreateOrConnectWithoutProductVariantInput>;

    @Field(() => ChannelCreateManyProductVariantInputEnvelope, {nullable:true})
    createMany?: ChannelCreateManyProductVariantInputEnvelope;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    connect?: Array<ChannelWhereUniqueInput>;
}
