import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandTranslationWhereInput } from './brand-translation-where.input';

@InputType()
export class BrandTranslationListRelationFilter {

    @Field(() => BrandTranslationWhereInput, {nullable:true})
    every?: BrandTranslationWhereInput;

    @Field(() => BrandTranslationWhereInput, {nullable:true})
    some?: BrandTranslationWhereInput;

    @Field(() => BrandTranslationWhereInput, {nullable:true})
    none?: BrandTranslationWhereInput;
}
