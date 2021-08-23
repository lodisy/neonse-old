import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantTranslationWhereUniqueInput } from './product-variant-translation-where-unique.input';
import { ProductVariantTranslationUpdateWithoutProductVariantInput } from './product-variant-translation-update-without-product-variant.input';
import { ProductVariantTranslationCreateWithoutProductVariantInput } from './product-variant-translation-create-without-product-variant.input';

@InputType()
export class ProductVariantTranslationUpsertWithWhereUniqueWithoutProductVariantInput {

    @Field(() => ProductVariantTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantTranslationWhereUniqueInput;

    @Field(() => ProductVariantTranslationUpdateWithoutProductVariantInput, {nullable:false})
    update!: ProductVariantTranslationUpdateWithoutProductVariantInput;

    @Field(() => ProductVariantTranslationCreateWithoutProductVariantInput, {nullable:false})
    create!: ProductVariantTranslationCreateWithoutProductVariantInput;
}
