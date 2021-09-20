import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeWhereInput } from './product-type-where.input';
import { ProductTypeOrderByWithAggregationInput } from './product-type-order-by-with-aggregation.input';
import { ProductTypeScalarFieldEnum } from './product-type-scalar-field.enum';
import { ProductTypeScalarWhereWithAggregatesInput } from './product-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductTypeCountAggregateInput } from './product-type-count-aggregate.input';
import { ProductTypeMinAggregateInput } from './product-type-min-aggregate.input';
import { ProductTypeMaxAggregateInput } from './product-type-max-aggregate.input';

@ArgsType()
export class ProductTypeGroupByArgs {

    @Field(() => ProductTypeWhereInput, {nullable:true})
    where?: ProductTypeWhereInput;

    @Field(() => [ProductTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductTypeOrderByWithAggregationInput>;

    @Field(() => [ProductTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductTypeScalarFieldEnum>;

    @Field(() => ProductTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductTypeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductTypeCountAggregateInput, {nullable:true})
    _count?: ProductTypeCountAggregateInput;

    @Field(() => ProductTypeMinAggregateInput, {nullable:true})
    _min?: ProductTypeMinAggregateInput;

    @Field(() => ProductTypeMaxAggregateInput, {nullable:true})
    _max?: ProductTypeMaxAggregateInput;
}
