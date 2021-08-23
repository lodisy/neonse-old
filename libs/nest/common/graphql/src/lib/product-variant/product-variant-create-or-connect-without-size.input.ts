import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantCreateWithoutSizeInput } from './product-variant-create-without-size.input';

@InputType()
export class ProductVariantCreateOrConnectWithoutSizeInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;

    @Field(() => ProductVariantCreateWithoutSizeInput, {nullable:false})
    create!: ProductVariantCreateWithoutSizeInput;
}
