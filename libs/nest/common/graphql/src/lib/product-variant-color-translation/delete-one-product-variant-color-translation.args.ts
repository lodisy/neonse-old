import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationWhereUniqueInput } from './product-variant-color-translation-where-unique.input';

@ArgsType()
export class DeleteOneProductVariantColorTranslationArgs {

    @Field(() => ProductVariantColorTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantColorTranslationWhereUniqueInput;
}
