import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantUpdateWithoutStyleInput } from './product-variant-update-without-style.input';
import { ProductVariantCreateWithoutStyleInput } from './product-variant-create-without-style.input';

@InputType()
export class ProductVariantUpsertWithoutStyleInput {

    @Field(() => ProductVariantUpdateWithoutStyleInput, {nullable:false})
    update!: ProductVariantUpdateWithoutStyleInput;

    @Field(() => ProductVariantCreateWithoutStyleInput, {nullable:false})
    create!: ProductVariantCreateWithoutStyleInput;
}
