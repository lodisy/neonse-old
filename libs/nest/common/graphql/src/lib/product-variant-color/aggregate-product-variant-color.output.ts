import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductVariantColorCountAggregate } from './product-variant-color-count-aggregate.output';
import { ProductVariantColorMinAggregate } from './product-variant-color-min-aggregate.output';
import { ProductVariantColorMaxAggregate } from './product-variant-color-max-aggregate.output';

@ObjectType()
export class AggregateProductVariantColor {

    @Field(() => ProductVariantColorCountAggregate, {nullable:true})
    _count?: ProductVariantColorCountAggregate;

    @Field(() => ProductVariantColorMinAggregate, {nullable:true})
    _min?: ProductVariantColorMinAggregate;

    @Field(() => ProductVariantColorMaxAggregate, {nullable:true})
    _max?: ProductVariantColorMaxAggregate;
}
