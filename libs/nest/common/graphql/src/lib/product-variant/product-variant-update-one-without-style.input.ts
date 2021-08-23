import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutStyleInput } from './product-variant-create-without-style.input';
import { ProductVariantCreateOrConnectWithoutStyleInput } from './product-variant-create-or-connect-without-style.input';
import { ProductVariantUpsertWithoutStyleInput } from './product-variant-upsert-without-style.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateWithoutStyleInput } from './product-variant-update-without-style.input';

@InputType()
export class ProductVariantUpdateOneWithoutStyleInput {

    @Field(() => ProductVariantCreateWithoutStyleInput, {nullable:true})
    create?: ProductVariantCreateWithoutStyleInput;

    @Field(() => ProductVariantCreateOrConnectWithoutStyleInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutStyleInput;

    @Field(() => ProductVariantUpsertWithoutStyleInput, {nullable:true})
    upsert?: ProductVariantUpsertWithoutStyleInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantUpdateWithoutStyleInput, {nullable:true})
    update?: ProductVariantUpdateWithoutStyleInput;
}
