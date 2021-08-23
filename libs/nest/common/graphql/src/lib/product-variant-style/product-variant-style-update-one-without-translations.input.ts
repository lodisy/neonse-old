import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleCreateWithoutTranslationsInput } from './product-variant-style-create-without-translations.input';
import { ProductVariantStyleCreateOrConnectWithoutTranslationsInput } from './product-variant-style-create-or-connect-without-translations.input';
import { ProductVariantStyleUpsertWithoutTranslationsInput } from './product-variant-style-upsert-without-translations.input';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { ProductVariantStyleUpdateWithoutTranslationsInput } from './product-variant-style-update-without-translations.input';

@InputType()
export class ProductVariantStyleUpdateOneWithoutTranslationsInput {

    @Field(() => ProductVariantStyleCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductVariantStyleCreateWithoutTranslationsInput;

    @Field(() => ProductVariantStyleCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductVariantStyleCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductVariantStyleUpsertWithoutTranslationsInput, {nullable:true})
    upsert?: ProductVariantStyleUpsertWithoutTranslationsInput;

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:true})
    connect?: ProductVariantStyleWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductVariantStyleUpdateWithoutTranslationsInput, {nullable:true})
    update?: ProductVariantStyleUpdateWithoutTranslationsInput;
}
