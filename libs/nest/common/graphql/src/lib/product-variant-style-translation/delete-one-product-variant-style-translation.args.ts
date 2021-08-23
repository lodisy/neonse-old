import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';

@ArgsType()
export class DeleteOneProductVariantStyleTranslationArgs {

    @Field(() => ProductVariantStyleTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantStyleTranslationWhereUniqueInput;
}
