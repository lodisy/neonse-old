import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantUpdateWithoutChannelsInput } from './product-variant-update-without-channels.input';
import { ProductVariantCreateWithoutChannelsInput } from './product-variant-create-without-channels.input';

@InputType()
export class ProductVariantUpsertWithoutChannelsInput {

    @Field(() => ProductVariantUpdateWithoutChannelsInput, {nullable:false})
    update!: ProductVariantUpdateWithoutChannelsInput;

    @Field(() => ProductVariantCreateWithoutChannelsInput, {nullable:false})
    create!: ProductVariantCreateWithoutChannelsInput;
}
