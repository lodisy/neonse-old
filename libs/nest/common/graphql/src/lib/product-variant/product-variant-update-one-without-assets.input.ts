import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutAssetsInput } from './product-variant-create-without-assets.input';
import { ProductVariantCreateOrConnectWithoutAssetsInput } from './product-variant-create-or-connect-without-assets.input';
import { ProductVariantUpsertWithoutAssetsInput } from './product-variant-upsert-without-assets.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateWithoutAssetsInput } from './product-variant-update-without-assets.input';

@InputType()
export class ProductVariantUpdateOneWithoutAssetsInput {

    @Field(() => ProductVariantCreateWithoutAssetsInput, {nullable:true})
    create?: ProductVariantCreateWithoutAssetsInput;

    @Field(() => ProductVariantCreateOrConnectWithoutAssetsInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutAssetsInput;

    @Field(() => ProductVariantUpsertWithoutAssetsInput, {nullable:true})
    upsert?: ProductVariantUpsertWithoutAssetsInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantUpdateWithoutAssetsInput, {nullable:true})
    update?: ProductVariantUpdateWithoutAssetsInput;
}
