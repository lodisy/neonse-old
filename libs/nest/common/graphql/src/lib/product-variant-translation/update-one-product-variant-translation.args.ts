import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantTranslationUpdateInput } from './product-variant-translation-update.input';
import { ProductVariantTranslationWhereUniqueInput } from './product-variant-translation-where-unique.input';

@ArgsType()
export class UpdateOneProductVariantTranslationArgs {

    @Field(() => ProductVariantTranslationUpdateInput, {nullable:false})
    data!: ProductVariantTranslationUpdateInput;

    @Field(() => ProductVariantTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantTranslationWhereUniqueInput;
}
