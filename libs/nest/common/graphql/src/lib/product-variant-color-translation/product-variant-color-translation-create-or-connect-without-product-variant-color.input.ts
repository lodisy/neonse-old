import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorTranslationWhereUniqueInput } from './product-variant-color-translation-where-unique.input';
import { ProductVariantColorTranslationCreateWithoutProductVariantColorInput } from './product-variant-color-translation-create-without-product-variant-color.input';

@InputType()
export class ProductVariantColorTranslationCreateOrConnectWithoutProductVariantColorInput {

    @Field(() => ProductVariantColorTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantColorTranslationWhereUniqueInput;

    @Field(() => ProductVariantColorTranslationCreateWithoutProductVariantColorInput, {nullable:false})
    create!: ProductVariantColorTranslationCreateWithoutProductVariantColorInput;
}
