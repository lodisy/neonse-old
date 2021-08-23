import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutSizeInput } from './product-variant-create-without-size.input';
import { ProductVariantCreateOrConnectWithoutSizeInput } from './product-variant-create-or-connect-without-size.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@InputType()
export class ProductVariantCreateNestedOneWithoutSizeInput {

    @Field(() => ProductVariantCreateWithoutSizeInput, {nullable:true})
    create?: ProductVariantCreateWithoutSizeInput;

    @Field(() => ProductVariantCreateOrConnectWithoutSizeInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutSizeInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;
}
