import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryTranslationWhereInput } from './product-category-translation-where.input';

@InputType()
export class ProductCategoryTranslationListRelationFilter {

    @Field(() => ProductCategoryTranslationWhereInput, {nullable:true})
    every?: ProductCategoryTranslationWhereInput;

    @Field(() => ProductCategoryTranslationWhereInput, {nullable:true})
    some?: ProductCategoryTranslationWhereInput;

    @Field(() => ProductCategoryTranslationWhereInput, {nullable:true})
    none?: ProductCategoryTranslationWhereInput;
}
