import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantTranslationWhereInput } from './product-variant-translation-where.input';

@InputType()
export class ProductVariantTranslationListRelationFilter {

    @Field(() => ProductVariantTranslationWhereInput, {nullable:true})
    every?: ProductVariantTranslationWhereInput;

    @Field(() => ProductVariantTranslationWhereInput, {nullable:true})
    some?: ProductVariantTranslationWhereInput;

    @Field(() => ProductVariantTranslationWhereInput, {nullable:true})
    none?: ProductVariantTranslationWhereInput;
}
