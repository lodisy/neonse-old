import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleCreateWithoutTranslationsInput } from './product-variant-style-create-without-translations.input';
import { ProductVariantStyleCreateOrConnectWithoutTranslationsInput } from './product-variant-style-create-or-connect-without-translations.input';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';

@InputType()
export class ProductVariantStyleCreateNestedOneWithoutTranslationsInput {

    @Field(() => ProductVariantStyleCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductVariantStyleCreateWithoutTranslationsInput;

    @Field(() => ProductVariantStyleCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductVariantStyleCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:true})
    connect?: ProductVariantStyleWhereUniqueInput;
}
