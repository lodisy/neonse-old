import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleWhereInput } from './product-variant-style-where.input';
import { ProductVariantStyleOrderByInput } from './product-variant-style-order-by.input';
import { ProductVariantStyleScalarFieldEnum } from './product-variant-style-scalar-field.enum';
import { ProductVariantStyleScalarWhereWithAggregatesInput } from './product-variant-style-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantStyleCountAggregateInput } from './product-variant-style-count-aggregate.input';
import { ProductVariantStyleMinAggregateInput } from './product-variant-style-min-aggregate.input';
import { ProductVariantStyleMaxAggregateInput } from './product-variant-style-max-aggregate.input';

@ArgsType()
export class ProductVariantStyleGroupByArgs {

    @Field(() => ProductVariantStyleWhereInput, {nullable:true})
    where?: ProductVariantStyleWhereInput;

    @Field(() => [ProductVariantStyleOrderByInput], {nullable:true})
    orderBy?: Array<ProductVariantStyleOrderByInput>;

    @Field(() => [ProductVariantStyleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductVariantStyleScalarFieldEnum>;

    @Field(() => ProductVariantStyleScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductVariantStyleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductVariantStyleCountAggregateInput, {nullable:true})
    _count?: ProductVariantStyleCountAggregateInput;

    @Field(() => ProductVariantStyleMinAggregateInput, {nullable:true})
    _min?: ProductVariantStyleMinAggregateInput;

    @Field(() => ProductVariantStyleMaxAggregateInput, {nullable:true})
    _max?: ProductVariantStyleMaxAggregateInput;
}
