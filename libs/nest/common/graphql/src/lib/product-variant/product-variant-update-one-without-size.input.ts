import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutSizeInput } from './product-variant-create-without-size.input';
import { ProductVariantCreateOrConnectWithoutSizeInput } from './product-variant-create-or-connect-without-size.input';
import { ProductVariantUpsertWithoutSizeInput } from './product-variant-upsert-without-size.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateWithoutSizeInput } from './product-variant-update-without-size.input';

@InputType()
export class ProductVariantUpdateOneWithoutSizeInput {

    @Field(() => ProductVariantCreateWithoutSizeInput, {nullable:true})
    create?: ProductVariantCreateWithoutSizeInput;

    @Field(() => ProductVariantCreateOrConnectWithoutSizeInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutSizeInput;

    @Field(() => ProductVariantUpsertWithoutSizeInput, {nullable:true})
    upsert?: ProductVariantUpsertWithoutSizeInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantUpdateWithoutSizeInput, {nullable:true})
    update?: ProductVariantUpdateWithoutSizeInput;
}
