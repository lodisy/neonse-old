import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorTranslationWhereInput } from './product-variant-color-translation-where.input';

@InputType()
export class ProductVariantColorTranslationListRelationFilter {

    @Field(() => ProductVariantColorTranslationWhereInput, {nullable:true})
    every?: ProductVariantColorTranslationWhereInput;

    @Field(() => ProductVariantColorTranslationWhereInput, {nullable:true})
    some?: ProductVariantColorTranslationWhereInput;

    @Field(() => ProductVariantColorTranslationWhereInput, {nullable:true})
    none?: ProductVariantColorTranslationWhereInput;
}
