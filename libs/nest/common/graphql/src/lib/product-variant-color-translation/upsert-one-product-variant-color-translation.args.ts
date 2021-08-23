import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationWhereUniqueInput } from './product-variant-color-translation-where-unique.input';
import { ProductVariantColorTranslationCreateInput } from './product-variant-color-translation-create.input';
import { ProductVariantColorTranslationUpdateInput } from './product-variant-color-translation-update.input';

@ArgsType()
export class UpsertOneProductVariantColorTranslationArgs {

    @Field(() => ProductVariantColorTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantColorTranslationWhereUniqueInput;

    @Field(() => ProductVariantColorTranslationCreateInput, {nullable:false})
    create!: ProductVariantColorTranslationCreateInput;

    @Field(() => ProductVariantColorTranslationUpdateInput, {nullable:false})
    update!: ProductVariantColorTranslationUpdateInput;
}
