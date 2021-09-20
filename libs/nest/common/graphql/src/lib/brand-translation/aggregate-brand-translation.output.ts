import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BrandTranslationCountAggregate } from './brand-translation-count-aggregate.output';
import { BrandTranslationMinAggregate } from './brand-translation-min-aggregate.output';
import { BrandTranslationMaxAggregate } from './brand-translation-max-aggregate.output';

@ObjectType()
export class AggregateBrandTranslation {

    @Field(() => BrandTranslationCountAggregate, {nullable:true})
    _count?: BrandTranslationCountAggregate;

    @Field(() => BrandTranslationMinAggregate, {nullable:true})
    _min?: BrandTranslationMinAggregate;

    @Field(() => BrandTranslationMaxAggregate, {nullable:true})
    _max?: BrandTranslationMaxAggregate;
}
