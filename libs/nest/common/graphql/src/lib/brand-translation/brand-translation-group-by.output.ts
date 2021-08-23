import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { BrandTranslationCountAggregate } from './brand-translation-count-aggregate.output';
import { BrandTranslationMinAggregate } from './brand-translation-min-aggregate.output';
import { BrandTranslationMaxAggregate } from './brand-translation-max-aggregate.output';

@ObjectType()
export class BrandTranslationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    brandId!: string;

    @Field(() => BrandTranslationCountAggregate, {nullable:true})
    _count?: BrandTranslationCountAggregate;

    @Field(() => BrandTranslationMinAggregate, {nullable:true})
    _min?: BrandTranslationMinAggregate;

    @Field(() => BrandTranslationMaxAggregate, {nullable:true})
    _max?: BrandTranslationMaxAggregate;
}
