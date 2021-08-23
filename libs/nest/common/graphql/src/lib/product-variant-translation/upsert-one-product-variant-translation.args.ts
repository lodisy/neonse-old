import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantTranslationWhereUniqueInput } from './product-variant-translation-where-unique.input';
import { ProductVariantTranslationCreateInput } from './product-variant-translation-create.input';
import { ProductVariantTranslationUpdateInput } from './product-variant-translation-update.input';

@ArgsType()
export class UpsertOneProductVariantTranslationArgs {

    @Field(() => ProductVariantTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantTranslationWhereUniqueInput;

    @Field(() => ProductVariantTranslationCreateInput, {nullable:false})
    create!: ProductVariantTranslationCreateInput;

    @Field(() => ProductVariantTranslationUpdateInput, {nullable:false})
    update!: ProductVariantTranslationUpdateInput;
}
