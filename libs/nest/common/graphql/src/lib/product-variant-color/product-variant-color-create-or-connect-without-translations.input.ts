import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';
import { ProductVariantColorCreateWithoutTranslationsInput } from './product-variant-color-create-without-translations.input';

@InputType()
export class ProductVariantColorCreateOrConnectWithoutTranslationsInput {

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:false})
    where!: ProductVariantColorWhereUniqueInput;

    @Field(() => ProductVariantColorCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductVariantColorCreateWithoutTranslationsInput;
}
