import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTypeWhereInput } from './product-type-where.input';
import { ProductTypeOrderByWithRelationInput } from './product-type-order-by-with-relation.input';
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductTypeCountAggregateInput } from './product-type-count-aggregate.input';
import { ProductTypeMinAggregateInput } from './product-type-min-aggregate.input';
import { ProductTypeMaxAggregateInput } from './product-type-max-aggregate.input';

@ArgsType()
export class ProductTypeAggregateArgs {

    @Field(() => ProductTypeWhereInput, {nullable:true})
    where?: ProductTypeWhereInput;

    @Field(() => [ProductTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductTypeOrderByWithRelationInput>;

    @Field(() => ProductTypeWhereUniqueInput, {nullable:true})
    cursor?: ProductTypeWhereUniqueInput;

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
