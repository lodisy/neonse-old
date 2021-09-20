import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandTranslationWhereInput } from './brand-translation-where.input';
import { BrandTranslationOrderByWithAggregationInput } from './brand-translation-order-by-with-aggregation.input';
import { BrandTranslationScalarFieldEnum } from './brand-translation-scalar-field.enum';
import { BrandTranslationScalarWhereWithAggregatesInput } from './brand-translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BrandTranslationCountAggregateInput } from './brand-translation-count-aggregate.input';
import { BrandTranslationMinAggregateInput } from './brand-translation-min-aggregate.input';
import { BrandTranslationMaxAggregateInput } from './brand-translation-max-aggregate.input';

@ArgsType()
export class BrandTranslationGroupByArgs {

    @Field(() => BrandTranslationWhereInput, {nullable:true})
    where?: BrandTranslationWhereInput;

    @Field(() => [BrandTranslationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BrandTranslationOrderByWithAggregationInput>;

    @Field(() => [BrandTranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BrandTranslationScalarFieldEnum>;

    @Field(() => BrandTranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: BrandTranslationScalarWhereWithAggregatesInput;

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
