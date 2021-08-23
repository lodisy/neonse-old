import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorCreateWithoutTranslationsInput } from './product-variant-color-create-without-translations.input';
import { ProductVariantColorCreateOrConnectWithoutTranslationsInput } from './product-variant-color-create-or-connect-without-translations.input';
import { ProductVariantColorUpsertWithoutTranslationsInput } from './product-variant-color-upsert-without-translations.input';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';
import { ProductVariantColorUpdateWithoutTranslationsInput } from './product-variant-color-update-without-translations.input';

@InputType()
export class ProductVariantColorUpdateOneWithoutTranslationsInput {

    @Field(() => ProductVariantColorCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductVariantColorCreateWithoutTranslationsInput;

    @Field(() => ProductVariantColorCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductVariantColorUpsertWithoutTranslationsInput, {nullable:true})
    upsert?: ProductVariantColorUpsertWithoutTranslationsInput;

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:true})
    connect?: ProductVariantColorWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantColorUpdateWithoutTranslationsInput, {nullable:true})
    update?: ProductVariantColorUpdateWithoutTranslationsInput;
}
