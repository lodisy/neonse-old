import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantUpdateWithoutSizeInput } from './product-variant-update-without-size.input';
import { ProductVariantCreateWithoutSizeInput } from './product-variant-create-without-size.input';

@InputType()
export class ProductVariantUpsertWithoutSizeInput {

    @Field(() => ProductVariantUpdateWithoutSizeInput, {nullable:false})
    update!: ProductVariantUpdateWithoutSizeInput;

    @Field(() => ProductVariantCreateWithoutSizeInput, {nullable:false})
    create!: ProductVariantCreateWithoutSizeInput;
}
