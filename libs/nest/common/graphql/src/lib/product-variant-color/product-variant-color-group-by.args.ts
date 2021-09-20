import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorWhereInput } from './product-variant-color-where.input';
import { ProductVariantColorOrderByWithAggregationInput } from './product-variant-color-order-by-with-aggregation.input';
import { ProductVariantColorScalarFieldEnum } from './product-variant-color-scalar-field.enum';
import { ProductVariantColorScalarWhereWithAggregatesInput } from './product-variant-color-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantColorCountAggregateInput } from './product-variant-color-count-aggregate.input';
import { ProductVariantColorMinAggregateInput } from './product-variant-color-min-aggregate.input';
import { ProductVariantColorMaxAggregateInput } from './product-variant-color-max-aggregate.input';

@ArgsType()
export class ProductVariantColorGroupByArgs {

    @Field(() => ProductVariantColorWhereInput, {nullable:true})
    where?: ProductVariantColorWhereInput;

    @Field(() => [ProductVariantColorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductVariantColorOrderByWithAggregationInput>;

    @Field(() => [ProductVariantColorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductVariantColorScalarFieldEnum>;

    @Field(() => ProductVariantColorScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductVariantColorScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductVariantColorCountAggregateInput, {nullable:true})
    _count?: ProductVariantColorCountAggregateInput;

    @Field(() => ProductVariantColorMinAggregateInput, {nullable:true})
    _min?: ProductVariantColorMinAggregateInput;

    @Field(() => ProductVariantColorMaxAggregateInput, {nullable:true})
    _max?: ProductVariantColorMaxAggregateInput;
}
