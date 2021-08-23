import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantColorTranslationCountAggregate } from './product-variant-color-translation-count-aggregate.output';
import { ProductVariantColorTranslationMinAggregate } from './product-variant-color-translation-min-aggregate.output';
import { ProductVariantColorTranslationMaxAggregate } from './product-variant-color-translation-max-aggregate.output';

@ObjectType()
export class ProductVariantColorTranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    productVariantColorId?: string;

    @Field(() => ProductVariantColorTranslationCountAggregate, {nullable:true})
    _count?: ProductVariantColorTranslationCountAggregate;

    @Field(() => ProductVariantColorTranslationMinAggregate, {nullable:true})
    _min?: ProductVariantColorTranslationMinAggregate;

    @Field(() => ProductVariantColorTranslationMaxAggregate, {nullable:true})
    _max?: ProductVariantColorTranslationMaxAggregate;
}
