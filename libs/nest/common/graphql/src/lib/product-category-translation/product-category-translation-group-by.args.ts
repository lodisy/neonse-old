import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryTranslationWhereInput } from './product-category-translation-where.input';
import { ProductCategoryTranslationOrderByWithAggregationInput } from './product-category-translation-order-by-with-aggregation.input';
import { ProductCategoryTranslationScalarFieldEnum } from './product-category-translation-scalar-field.enum';
import { ProductCategoryTranslationScalarWhereWithAggregatesInput } from './product-category-translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductCategoryTranslationCountAggregateInput } from './product-category-translation-count-aggregate.input';
import { ProductCategoryTranslationMinAggregateInput } from './product-category-translation-min-aggregate.input';
import { ProductCategoryTranslationMaxAggregateInput } from './product-category-translation-max-aggregate.input';

@ArgsType()
export class ProductCategoryTranslationGroupByArgs {

    @Field(() => ProductCategoryTranslationWhereInput, {nullable:true})
    where?: ProductCategoryTranslationWhereInput;

    @Field(() => [ProductCategoryTranslationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductCategoryTranslationOrderByWithAggregationInput>;

    @Field(() => [ProductCategoryTranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductCategoryTranslationScalarFieldEnum>;

    @Field(() => ProductCategoryTranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductCategoryTranslationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductCategoryTranslationCountAggregateInput, {nullable:true})
    _count?: ProductCategoryTranslationCountAggregateInput;

    @Field(() => ProductCategoryTranslationMinAggregateInput, {nullable:true})
    _min?: ProductCategoryTranslationMinAggregateInput;

    @Field(() => ProductCategoryTranslationMaxAggregateInput, {nullable:true})
    _max?: ProductCategoryTranslationMaxAggregateInput;
}
