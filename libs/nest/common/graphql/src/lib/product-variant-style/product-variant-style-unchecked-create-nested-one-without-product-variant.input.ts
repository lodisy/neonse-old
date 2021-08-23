import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleCreateWithoutProductVariantInput } from './product-variant-style-create-without-product-variant.input';
import { ProductVariantStyleCreateOrConnectWithoutProductVariantInput } from './product-variant-style-create-or-connect-without-product-variant.input';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';

@InputType()
export class ProductVariantStyleUncheckedCreateNestedOneWithoutProductVariantInput {

    @Field(() => ProductVariantStyleCreateWithoutProductVariantInput, {nullable:true})
    create?: ProductVariantStyleCreateWithoutProductVariantInput;

    @Field(() => ProductVariantStyleCreateOrConnectWithoutProductVariantInput, {nullable:true})
    connectOrCreate?: ProductVariantStyleCreateOrConnectWithoutProductVariantInput;

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:true})
    connect?: ProductVariantStyleWhereUniqueInput;
}
