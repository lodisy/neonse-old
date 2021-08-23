import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';
import { ProductVariantStyleTranslationCreateInput } from './product-variant-style-translation-create.input';
import { ProductVariantStyleTranslationUpdateInput } from './product-variant-style-translation-update.input';

@ArgsType()
export class UpsertOneProductVariantStyleTranslationArgs {

    @Field(() => ProductVariantStyleTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleTranslationWhereUniqueInput;

    @Field(() => ProductVariantStyleTranslationCreateInput, {nullable:false})
    create!: ProductVariantStyleTranslationCreateInput;

    @Field(() => ProductVariantStyleTranslationUpdateInput, {nullable:false})
    update!: ProductVariantStyleTranslationUpdateInput;
}
