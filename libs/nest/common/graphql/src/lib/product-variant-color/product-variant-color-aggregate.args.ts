import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorWhereInput } from './product-variant-color-where.input';
import { ProductVariantColorOrderByInput } from './product-variant-color-order-by.input';
import { ProductVariantColorWhereUniqueInput } from './product-variant-color-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantColorCountAggregateInput } from './product-variant-color-count-aggregate.input';
import { ProductVariantColorMinAggregateInput } from './product-variant-color-min-aggregate.input';
import { ProductVariantColorMaxAggregateInput } from './product-variant-color-max-aggregate.input';

@ArgsType()
export class ProductVariantColorAggregateArgs {

    @Field(() => ProductVariantColorWhereInput, {nullable:true})
    where?: ProductVariantColorWhereInput;

    @Field(() => [ProductVariantColorOrderByInput], {nullable:true})
    orderBy?: Array<ProductVariantColorOrderByInput>;

    @Field(() => ProductVariantColorWhereUniqueInput, {nullable:true})
    cursor?: ProductVariantColorWhereUniqueInput;

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
