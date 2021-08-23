import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantStyleTranslationCountAggregate } from './product-variant-style-translation-count-aggregate.output';
import { ProductVariantStyleTranslationMinAggregate } from './product-variant-style-translation-min-aggregate.output';
import { ProductVariantStyleTranslationMaxAggregate } from './product-variant-style-translation-max-aggregate.output';

@ObjectType()
export class ProductVariantStyleTranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    productVariantStyleId?: string;

    @Field(() => ProductVariantStyleTranslationCountAggregate, {nullable:true})
    _count?: ProductVariantStyleTranslationCountAggregate;

    @Field(() => ProductVariantStyleTranslationMinAggregate, {nullable:true})
    _min?: ProductVariantStyleTranslationMinAggregate;

    @Field(() => ProductVariantStyleTranslationMaxAggregate, {nullable:true})
    _max?: ProductVariantStyleTranslationMaxAggregate;
}
