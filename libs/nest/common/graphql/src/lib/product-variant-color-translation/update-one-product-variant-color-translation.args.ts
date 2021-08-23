import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationUpdateInput } from './product-variant-color-translation-update.input';
import { ProductVariantColorTranslationWhereUniqueInput } from './product-variant-color-translation-where-unique.input';

@ArgsType()
export class UpdateOneProductVariantColorTranslationArgs {

    @Field(() => ProductVariantColorTranslationUpdateInput, {nullable:false})
    data!: ProductVariantColorTranslationUpdateInput;

    @Field(() => ProductVariantColorTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantColorTranslationWhereUniqueInput;
}
