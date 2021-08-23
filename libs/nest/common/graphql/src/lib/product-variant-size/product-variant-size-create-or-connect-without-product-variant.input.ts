import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantSizeWhereUniqueInput } from './product-variant-size-where-unique.input';
import { ProductVariantSizeCreateWithoutProductVariantInput } from './product-variant-size-create-without-product-variant.input';

@InputType()
export class ProductVariantSizeCreateOrConnectWithoutProductVariantInput {

    @Field(() => ProductVariantSizeWhereUniqueInput, {nullable:false})
    where!: ProductVariantSizeWhereUniqueInput;

    @Field(() => ProductVariantSizeCreateWithoutProductVariantInput, {nullable:false})
    create!: ProductVariantSizeCreateWithoutProductVariantInput;
}
