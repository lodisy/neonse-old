import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutColorInput } from './product-variant-create-without-color.input';
import { ProductVariantCreateOrConnectWithoutColorInput } from './product-variant-create-or-connect-without-color.input';
import { ProductVariantUpsertWithoutColorInput } from './product-variant-upsert-without-color.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateWithoutColorInput } from './product-variant-update-without-color.input';

@InputType()
export class ProductVariantUpdateOneWithoutColorInput {

    @Field(() => ProductVariantCreateWithoutColorInput, {nullable:true})
    create?: ProductVariantCreateWithoutColorInput;

    @Field(() => ProductVariantCreateOrConnectWithoutColorInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutColorInput;

    @Field(() => ProductVariantUpsertWithoutColorInput, {nullable:true})
    upsert?: ProductVariantUpsertWithoutColorInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantUpdateWithoutColorInput, {nullable:true})
    update?: ProductVariantUpdateWithoutColorInput;
}
