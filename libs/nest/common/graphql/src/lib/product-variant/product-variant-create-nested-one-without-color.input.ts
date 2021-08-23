import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutColorInput } from './product-variant-create-without-color.input';
import { ProductVariantCreateOrConnectWithoutColorInput } from './product-variant-create-or-connect-without-color.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@InputType()
export class ProductVariantCreateNestedOneWithoutColorInput {

    @Field(() => ProductVariantCreateWithoutColorInput, {nullable:true})
    create?: ProductVariantCreateWithoutColorInput;

    @Field(() => ProductVariantCreateOrConnectWithoutColorInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutColorInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;
}
