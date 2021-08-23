import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutChannelsInput } from './product-variant-create-without-channels.input';
import { ProductVariantCreateOrConnectWithoutChannelsInput } from './product-variant-create-or-connect-without-channels.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@InputType()
export class ProductVariantCreateNestedOneWithoutChannelsInput {

    @Field(() => ProductVariantCreateWithoutChannelsInput, {nullable:true})
    create?: ProductVariantCreateWithoutChannelsInput;

    @Field(() => ProductVariantCreateOrConnectWithoutChannelsInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutChannelsInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;
}
