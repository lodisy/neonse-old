import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryTranslationWhereInput } from './product-category-translation-where.input';
import { ProductCategoryTranslationOrderByInput } from './product-category-translation-order-by.input';
import { ProductCategoryTranslationWhereUniqueInput } from './product-category-translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductCategoryTranslationCountAggregateInput } from './product-category-translation-count-aggregate.input';
import { ProductCategoryTranslationMinAggregateInput } from './product-category-translation-min-aggregate.input';
import { ProductCategoryTranslationMaxAggregateInput } from './product-category-translation-max-aggregate.input';

@ArgsType()
export class ProductCategoryTranslationAggregateArgs {

    @Field(() => ProductCategoryTranslationWhereInput, {nullable:true})
    where?: ProductCategoryTranslationWhereInput;

    @Field(() => [ProductCategoryTranslationOrderByInput], {nullable:true})
    orderBy?: Array<ProductCategoryTranslationOrderByInput>;

    @Field(() => ProductCategoryTranslationWhereUniqueInput, {nullable:true})
    cursor?: ProductCategoryTranslationWhereUniqueInput;

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
