import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantCreateWithoutChannelsInput } from './product-variant-create-without-channels.input';

@InputType()
export class ProductVariantCreateOrConnectWithoutChannelsInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;

    @Field(() => ProductVariantCreateWithoutChannelsInput, {nullable:false})
    create!: ProductVariantCreateWithoutChannelsInput;
}
