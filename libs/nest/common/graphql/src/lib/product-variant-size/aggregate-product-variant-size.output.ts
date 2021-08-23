import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductVariantSizeCountAggregate } from './product-variant-size-count-aggregate.output';
import { ProductVariantSizeMinAggregate } from './product-variant-size-min-aggregate.output';
import { ProductVariantSizeMaxAggregate } from './product-variant-size-max-aggregate.output';

@ObjectType()
export class AggregateProductVariantSize {

    @Field(() => ProductVariantSizeCountAggregate, {nullable:true})
    _count?: ProductVariantSizeCountAggregate;

    @Field(() => ProductVariantSizeCountAggregate, {nullable:true})
    count?: ProductVariantSizeCountAggregate;

    @Field(() => ProductVariantSizeMinAggregate, {nullable:true})
    _min?: ProductVariantSizeMinAggregate;

    @Field(() => ProductVariantSizeMinAggregate, {nullable:true})
    min?: ProductVariantSizeMinAggregate;

    @Field(() => ProductVariantSizeMaxAggregate, {nullable:true})
    _max?: ProductVariantSizeMaxAggregate;

    @Field(() => ProductVariantSizeMaxAggregate, {nullable:true})
    max?: ProductVariantSizeMaxAggregate;
}
