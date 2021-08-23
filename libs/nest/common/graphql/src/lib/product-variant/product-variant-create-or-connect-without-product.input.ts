import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantCreateWithoutProductInput } from './product-variant-create-without-product.input';

@InputType()
export class ProductVariantCreateOrConnectWithoutProductInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;

    @Field(() => ProductVariantCreateWithoutProductInput, {nullable:false})
    create!: ProductVariantCreateWithoutProductInput;
}
