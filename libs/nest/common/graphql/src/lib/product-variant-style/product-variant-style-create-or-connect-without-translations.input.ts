import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleWhereUniqueInput } from './product-variant-style-where-unique.input';
import { ProductVariantStyleCreateWithoutTranslationsInput } from './product-variant-style-create-without-translations.input';

@InputType()
export class ProductVariantStyleCreateOrConnectWithoutTranslationsInput {

    @Field(() => ProductVariantStyleWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleWhereUniqueInput;

    @Field(() => ProductVariantStyleCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductVariantStyleCreateWithoutTranslationsInput;
}
