import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { ProductVariantStyleCreateWithoutProductVariantInput } from './product-variant-style-create-without-product-variant.input';

@InputType()
export class ProductVariantStyleCreateOrConnectWithoutProductVariantInput {

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleWhereUniqueInput;

    @Field(() => ProductVariantStyleCreateWithoutProductVariantInput, {nullable:false})
    create!: ProductVariantStyleCreateWithoutProductVariantInput;
}
