import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationUpdateInput } from './product-variant-style-translation-update.input';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';

@ArgsType()
export class UpdateOneProductVariantStyleTranslationArgs {

    @Field(() => ProductVariantStyleTranslationUpdateInput, {nullable:false})
    data!: ProductVariantStyleTranslationUpdateInput;

    @Field(() => ProductVariantStyleTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleTranslationWhereUniqueInput;
}
