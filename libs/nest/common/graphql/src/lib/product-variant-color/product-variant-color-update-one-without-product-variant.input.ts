import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorCreateWithoutProductVariantInput } from './product-variant-color-create-without-product-variant.input';
import { ProductVariantColorCreateOrConnectWithoutProductVariantInput } from './product-variant-color-create-or-connect-without-product-variant.input';
import { ProductVariantColorUpsertWithoutProductVariantInput } from './product-variant-color-upsert-without-product-variant.input';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';
import { ProductVariantColorUpdateWithoutProductVariantInput } from './product-variant-color-update-without-product-variant.input';

@InputType()
export class ProductVariantColorUpdateOneWithoutProductVariantInput {

    @Field(() => ProductVariantColorCreateWithoutProductVariantInput, {nullable:true})
    create?: ProductVariantColorCreateWithoutProductVariantInput;

    @Field(() => ProductVariantColorCreateOrConnectWithoutProductVariantInput, {nullable:true})
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutProductVariantInput;

    @Field(() => ProductVariantColorUpsertWithoutProductVariantInput, {nullable:true})
    upsert?: ProductVariantColorUpsertWithoutProductVariantInput;

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:true})
    connect?: ProductVariantColorWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantColorUpdateWithoutProductVariantInput, {nullable:true})
    update?: ProductVariantColorUpdateWithoutProductVariantInput;
}
