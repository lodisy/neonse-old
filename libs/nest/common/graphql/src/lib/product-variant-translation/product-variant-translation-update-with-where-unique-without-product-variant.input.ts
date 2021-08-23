import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantTranslationWhereUniqueInput } from './product-variant-translation-where-unique.input';
import { ProductVariantTranslationUpdateWithoutProductVariantInput } from './product-variant-translation-update-without-product-variant.input';

@InputType()
export class ProductVariantTranslationUpdateWithWhereUniqueWithoutProductVariantInput {

    @Field(() => ProductVariantTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantTranslationWhereUniqueInput;

    @Field(() => ProductVariantTranslationUpdateWithoutProductVariantInput, {nullable:false})
    data!: ProductVariantTranslationUpdateWithoutProductVariantInput;
}
