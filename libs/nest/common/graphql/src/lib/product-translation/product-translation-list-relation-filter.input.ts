import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTranslationWhereInput } from './product-translation-where.input';

@InputType()
export class ProductTranslationListRelationFilter {

    @Field(() => ProductTranslationWhereInput, {nullable:true})
    every?: ProductTranslationWhereInput;

    @Field(() => ProductTranslationWhereInput, {nullable:true})
    some?: ProductTranslationWhereInput;

    @Field(() => ProductTranslationWhereInput, {nullable:true})
    none?: ProductTranslationWhereInput;
}
