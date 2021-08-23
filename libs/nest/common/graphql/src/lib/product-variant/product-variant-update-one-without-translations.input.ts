import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutTranslationsInput } from './product-variant-create-without-translations.input';
import { ProductVariantCreateOrConnectWithoutTranslationsInput } from './product-variant-create-or-connect-without-translations.input';
import { ProductVariantUpsertWithoutTranslationsInput } from './product-variant-upsert-without-translations.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantUpdateWithoutTranslationsInput } from './product-variant-update-without-translations.input';

@InputType()
export class ProductVariantUpdateOneWithoutTranslationsInput {

    @Field(() => ProductVariantCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductVariantCreateWithoutTranslationsInput;

    @Field(() => ProductVariantCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductVariantUpsertWithoutTranslationsInput, {nullable:true})
    upsert?: ProductVariantUpsertWithoutTranslationsInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantUpdateWithoutTranslationsInput, {nullable:true})
    update?: ProductVariantUpdateWithoutTranslationsInput;
}
