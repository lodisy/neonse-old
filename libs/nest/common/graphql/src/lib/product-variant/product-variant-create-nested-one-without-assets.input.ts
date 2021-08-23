import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutAssetsInput } from './product-variant-create-without-assets.input';
import { ProductVariantCreateOrConnectWithoutAssetsInput } from './product-variant-create-or-connect-without-assets.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@InputType()
export class ProductVariantCreateNestedOneWithoutAssetsInput {

    @Field(() => ProductVariantCreateWithoutAssetsInput, {nullable:true})
    create?: ProductVariantCreateWithoutAssetsInput;

    @Field(() => ProductVariantCreateOrConnectWithoutAssetsInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutAssetsInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;
}
