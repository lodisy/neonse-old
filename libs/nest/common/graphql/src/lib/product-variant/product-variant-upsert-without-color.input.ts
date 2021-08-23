import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantUpdateWithoutColorInput } from './product-variant-update-without-color.input';
import { ProductVariantCreateWithoutColorInput } from './product-variant-create-without-color.input';

@InputType()
export class ProductVariantUpsertWithoutColorInput {

    @Field(() => ProductVariantUpdateWithoutColorInput, {nullable:false})
    update!: ProductVariantUpdateWithoutColorInput;

    @Field(() => ProductVariantCreateWithoutColorInput, {nullable:false})
    create!: ProductVariantCreateWithoutColorInput;
}
