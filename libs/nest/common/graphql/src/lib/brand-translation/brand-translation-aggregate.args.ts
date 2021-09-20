import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationWhereInput } from './brand-translation-where.input';
import { BrandTranslationOrderByWithRelationInput } from './brand-translation-order-by-with-relation.input';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BrandTranslationCountAggregateInput } from './brand-translation-count-aggregate.input';
import { BrandTranslationMinAggregateInput } from './brand-translation-min-aggregate.input';
import { BrandTranslationMaxAggregateInput } from './brand-translation-max-aggregate.input';

@ArgsType()
export class BrandTranslationAggregateArgs {

    @Field(() => BrandTranslationWhereInput, {nullable:true})
    where?: BrandTranslationWhereInput;

    @Field(() => [BrandTranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BrandTranslationOrderByWithRelationInput>;

    @Field(() => BrandTranslationWhereUniqueInput, {nullable:true})
    cursor?: BrandTranslationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BrandTranslationCountAggregateInput, {nullable:true})
    _count?: BrandTranslationCountAggregateInput;

    @Field(() => BrandTranslationMinAggregateInput, {nullable:true})
    _min?: BrandTranslationMinAggregateInput;

    @Field(() => BrandTranslationMaxAggregateInput, {nullable:true})
    _max?: BrandTranslationMaxAggregateInput;
}
