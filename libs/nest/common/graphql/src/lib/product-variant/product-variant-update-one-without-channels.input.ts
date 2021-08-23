import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutChannelsInput } from './product-variant-create-without-channels.input';
import { ProductVariantCreateOrConnectWithoutChannelsInput } from './product-variant-create-or-connect-without-channels.input';
import { ProductVariantUpsertWithoutChannelsInput } from './product-variant-upsert-without-channels.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateWithoutChannelsInput } from './product-variant-update-without-channels.input';

@InputType()
export class ProductVariantUpdateOneWithoutChannelsInput {

    @Field(() => ProductVariantCreateWithoutChannelsInput, {nullable:true})
    create?: ProductVariantCreateWithoutChannelsInput;

    @Field(() => ProductVariantCreateOrConnectWithoutChannelsInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutChannelsInput;

    @Field(() => ProductVariantUpsertWithoutChannelsInput, {nullable:true})
    upsert?: ProductVariantUpsertWithoutChannelsInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantUpdateWithoutChannelsInput, {nullable:true})
    update?: ProductVariantUpdateWithoutChannelsInput;
}
