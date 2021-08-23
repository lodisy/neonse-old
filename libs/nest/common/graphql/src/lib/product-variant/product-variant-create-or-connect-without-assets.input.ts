import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantCreateWithoutAssetsInput } from './product-variant-create-without-assets.input';

@InputType()
export class ProductVariantCreateOrConnectWithoutAssetsInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;

    @Field(() => ProductVariantCreateWithoutAssetsInput, {nullable:false})
    create!: ProductVariantCreateWithoutAssetsInput;
}
