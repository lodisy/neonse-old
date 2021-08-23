import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantTranslationCountAggregate } from './product-variant-translation-count-aggregate.output';
import { ProductVariantTranslationMinAggregate } from './product-variant-translation-min-aggregate.output';
import { ProductVariantTranslationMaxAggregate } from './product-variant-translation-max-aggregate.output';

@ObjectType()
export class ProductVariantTranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    productVariantId?: string;

    @Field(() => ProductVariantTranslationCountAggregate, {nullable:true})
    _count?: ProductVariantTranslationCountAggregate;

    @Field(() => ProductVariantTranslationMinAggregate, {nullable:true})
    _min?: ProductVariantTranslationMinAggregate;

    @Field(() => ProductVariantTranslationMaxAggregate, {nullable:true})
    _max?: ProductVariantTranslationMaxAggregate;
}
