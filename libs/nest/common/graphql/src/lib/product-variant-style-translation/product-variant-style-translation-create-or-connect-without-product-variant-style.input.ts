import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';
import { ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput } from './product-variant-style-translation-create-without-product-variant-style.input';

@InputType()
export class ProductVariantStyleTranslationCreateOrConnectWithoutProductVariantStyleInput {

    @Field(() => ProductVariantStyleTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleTranslationWhereUniqueInput;

    @Field(() => ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput, {nullable:false})
    create!: ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput;
}
