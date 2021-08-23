import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorCreateWithoutTranslationsInput } from './product-variant-color-create-without-translations.input';
import { ProductVariantColorCreateOrConnectWithoutTranslationsInput } from './product-variant-color-create-or-connect-without-translations.input';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';

@InputType()
export class ProductVariantColorCreateNestedOneWithoutTranslationsInput {

    @Field(() => ProductVariantColorCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductVariantColorCreateWithoutTranslationsInput;

    @Field(() => ProductVariantColorCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductVariantColorCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:true})
    connect?: ProductVariantColorWhereUniqueInput;
}
