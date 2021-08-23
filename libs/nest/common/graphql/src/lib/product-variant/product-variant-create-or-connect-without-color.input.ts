import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantCreateWithoutColorInput } from './product-variant-create-without-color.input';

@InputType()
export class ProductVariantCreateOrConnectWithoutColorInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;

    @Field(() => ProductVariantCreateWithoutColorInput, {nullable:false})
    create!: ProductVariantCreateWithoutColorInput;
}
