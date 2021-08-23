import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutProductVariantInput } from './channel-create-without-product-variant.input';
import { ChannelCreateOrConnectWithoutProductVariantInput } from './channel-create-or-connect-without-product-variant.input';
import { ChannelUpsertWithWhereUniqueWithoutProductVariantInput } from './channel-upsert-with-where-unique-without-product-variant.input';
import { ChannelCreateManyProductVariantInputEnvelope } from './channel-create-many-product-variant-input-envelope.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithWhereUniqueWithoutProductVariantInput } from './channel-update-with-where-unique-without-product-variant.input';
import { ChannelUpdateManyWithWhereWithoutProductVariantInput } from './channel-update-many-with-where-without-product-variant.input';
import { ChannelScalarWhereInput } from './channel-scalar-where.input';

@InputType()
export class ChannelUpdateManyWithoutProductVariantInput {

    @Field(() => [ChannelCreateWithoutProductVariantInput], {nullable:true})
    create?: Array<ChannelCreateWithoutProductVariantInput>;

    @Field(() => [ChannelCreateOrConnectWithoutProductVariantInput], {nullable:true})
    connectOrCreate?: Array<ChannelCreateOrConnectWithoutProductVariantInput>;

    @Field(() => [ChannelUpsertWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    upsert?: Array<ChannelUpsertWithWhereUniqueWithoutProductVariantInput>;

    @Field(() => ChannelCreateManyProductVariantInputEnvelope, {nullable:true})
    createMany?: ChannelCreateManyProductVariantInputEnvelope;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    connect?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    set?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    disconnect?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    delete?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelUpdateWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    update?: Array<ChannelUpdateWithWhereUniqueWithoutProductVariantInput>;

    @Field(() => [ChannelUpdateManyWithWhereWithoutProductVariantInput], {nullable:true})
    updateMany?: Array<ChannelUpdateManyWithWhereWithoutProductVariantInput>;

    @Field(() => [ChannelScalarWhereInput], {nullable:true})
    deleteMany?: Array<ChannelScalarWhereInput>;
}
