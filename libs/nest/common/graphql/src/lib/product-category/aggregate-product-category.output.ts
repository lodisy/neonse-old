import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductCategoryCountAggregate } from './product-category-count-aggregate.output';
import { ProductCategoryMinAggregate } from './product-category-min-aggregate.output';
import { ProductCategoryMaxAggregate } from './product-category-max-aggregate.output';

@ObjectType()
export class AggregateProductCategory {

    @Field(() => ProductCategoryCountAggregate, {nullable:true})
    _count?: ProductCategoryCountAggregate;

    @Field(() => ProductCategoryMinAggregate, {nullable:true})
    _min?: ProductCategoryMinAggregate;

    @Field(() => ProductCategoryMaxAggregate, {nullable:true})
    _max?: ProductCategoryMaxAggregate;
}
