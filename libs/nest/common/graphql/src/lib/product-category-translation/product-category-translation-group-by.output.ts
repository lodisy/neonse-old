import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductCategoryTranslationCountAggregate } from './product-category-translation-count-aggregate.output';
import { ProductCategoryTranslationMinAggregate } from './product-category-translation-min-aggregate.output';
import { ProductCategoryTranslationMaxAggregate } from './product-category-translation-max-aggregate.output';

@ObjectType()
export class ProductCategoryTranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    productCategoryId?: string;

    @Field(() => ProductCategoryTranslationCountAggregate, {nullable:true})
    _count?: ProductCategoryTranslationCountAggregate;

    @Field(() => ProductCategoryTranslationMinAggregate, {nullable:true})
    _min?: ProductCategoryTranslationMinAggregate;

    @Field(() => ProductCategoryTranslationMaxAggregate, {nullable:true})
    _max?: ProductCategoryTranslationMaxAggregate;
}
