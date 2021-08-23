import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeTranslationWhereInput } from './product-type-translation-where.input';

@InputType()
export class ProductTypeTranslationListRelationFilter {

    @Field(() => ProductTypeTranslationWhereInput, {nullable:true})
    every?: ProductTypeTranslationWhereInput;

    @Field(() => ProductTypeTranslationWhereInput, {nullable:true})
    some?: ProductTypeTranslationWhereInput;

    @Field(() => ProductTypeTranslationWhereInput, {nullable:true})
    none?: ProductTypeTranslationWhereInput;
}
