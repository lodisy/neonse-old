import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleCreateWithoutProductVariantInput } from './product-variant-style-create-without-product-variant.input';
import { ProductVariantStyleCreateOrConnectWithoutProductVariantInput } from './product-variant-style-create-or-connect-without-product-variant.input';
import { ProductVariantStyleUpsertWithoutProductVariantInput } from './product-variant-style-upsert-without-product-variant.input';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { ProductVariantStyleUpdateWithoutProductVariantInput } from './product-variant-style-update-without-product-variant.input';

@InputType()
export class ProductVariantStyleUncheckedUpdateOneWithoutProductVariantInput {

    @Field(() => ProductVariantStyleCreateWithoutProductVariantInput, {nullable:true})
    create?: ProductVariantStyleCreateWithoutProductVariantInput;

    @Field(() => ProductVariantStyleCreateOrConnectWithoutProductVariantInput, {nullable:true})
    connectOrCreate?: ProductVariantStyleCreateOrConnectWithoutProductVariantInput;

    @Field(() => ProductVariantStyleUpsertWithoutProductVariantInput, {nullable:true})
    upsert?: ProductVariantStyleUpsertWithoutProductVariantInput;

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:true})
    connect?: ProductVariantStyleWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantStyleUpdateWithoutProductVariantInput, {nullable:true})
    update?: ProductVariantStyleUpdateWithoutProductVariantInput;
}
