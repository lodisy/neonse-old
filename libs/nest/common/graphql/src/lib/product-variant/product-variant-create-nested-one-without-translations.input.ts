import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutTranslationsInput } from './product-variant-create-without-translations.input';
import { ProductVariantCreateOrConnectWithoutTranslationsInput } from './product-variant-create-or-connect-without-translations.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@InputType()
export class ProductVariantCreateNestedOneWithoutTranslationsInput {

    @Field(() => ProductVariantCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductVariantCreateWithoutTranslationsInput;

    @Field(() => ProductVariantCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;
}
