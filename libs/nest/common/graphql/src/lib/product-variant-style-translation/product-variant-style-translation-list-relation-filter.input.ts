import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationWhereInput } from './product-variant-style-translation-where.input';

@InputType()
export class ProductVariantStyleTranslationListRelationFilter {

    @Field(() => ProductVariantStyleTranslationWhereInput, {nullable:true})
    every?: ProductVariantStyleTranslationWhereInput;

    @Field(() => ProductVariantStyleTranslationWhereInput, {nullable:true})
    some?: ProductVariantStyleTranslationWhereInput;

    @Field(() => ProductVariantStyleTranslationWhereInput, {nullable:true})
    none?: ProductVariantStyleTranslationWhereInput;
}
