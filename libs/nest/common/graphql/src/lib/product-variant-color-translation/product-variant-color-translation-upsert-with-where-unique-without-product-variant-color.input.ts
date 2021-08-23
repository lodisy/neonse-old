import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorTranslationWhereUniqueInput } from './product-variant-color-translation-where-unique.input';
import { ProductVariantColorTranslationUpdateWithoutProductVariantColorInput } from './product-variant-color-translation-update-without-product-variant-color.input';
import { ProductVariantColorTranslationCreateWithoutProductVariantColorInput } from './product-variant-color-translation-create-without-product-variant-color.input';

@InputType()
export class ProductVariantColorTranslationUpsertWithWhereUniqueWithoutProductVariantColorInput {

    @Field(() => ProductVariantColorTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantColorTranslationWhereUniqueInput;

    @Field(() => ProductVariantColorTranslationUpdateWithoutProductVariantColorInput, {nullable:false})
    update!: ProductVariantColorTranslationUpdateWithoutProductVariantColorInput;

    @Field(() => ProductVariantColorTranslationCreateWithoutProductVariantColorInput, {nullable:false})
    create!: ProductVariantColorTranslationCreateWithoutProductVariantColorInput;
}
