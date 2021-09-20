import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeTranslationWhereInput } from './product-type-translation-where.input';
import { ProductTypeTranslationOrderByWithAggregationInput } from './product-type-translation-order-by-with-aggregation.input';
import { ProductTypeTranslationScalarFieldEnum } from './product-type-translation-scalar-field.enum';
import { ProductTypeTranslationScalarWhereWithAggregatesInput } from './product-type-translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductTypeTranslationCountAggregateInput } from './product-type-translation-count-aggregate.input';
import { ProductTypeTranslationMinAggregateInput } from './product-type-translation-min-aggregate.input';
import { ProductTypeTranslationMaxAggregateInput } from './product-type-translation-max-aggregate.input';

@ArgsType()
export class ProductTypeTranslationGroupByArgs {

    @Field(() => ProductTypeTranslationWhereInput, {nullable:true})
    where?: ProductTypeTranslationWhereInput;

    @Field(() => [ProductTypeTranslationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductTypeTranslationOrderByWithAggregationInput>;

    @Field(() => [ProductTypeTranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductTypeTranslationScalarFieldEnum>;

    @Field(() => ProductTypeTranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductTypeTranslationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductTypeTranslationCountAggregateInput, {nullable:true})
    _count?: ProductTypeTranslationCountAggregateInput;

    @Field(() => ProductTypeTranslationMinAggregateInput, {nullable:true})
    _min?: ProductTypeTranslationMinAggregateInput;

    @Field(() => ProductTypeTranslationMaxAggregateInput, {nullable:true})
    _max?: ProductTypeTranslationMaxAggregateInput;
}
