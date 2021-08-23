import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductVariantStyleCountAggregate } from './product-variant-style-count-aggregate.output';
import { ProductVariantStyleMinAggregate } from './product-variant-style-min-aggregate.output';
import { ProductVariantStyleMaxAggregate } from './product-variant-style-max-aggregate.output';

@ObjectType()
export class AggregateProductVariantStyle {

    @Field(() => ProductVariantStyleCountAggregate, {nullable:true})
    _count?: ProductVariantStyleCountAggregate;

    @Field(() => ProductVariantStyleCountAggregate, {nullable:true})
    count?: ProductVariantStyleCountAggregate;

    @Field(() => ProductVariantStyleMinAggregate, {nullable:true})
    _min?: ProductVariantStyleMinAggregate;

    @Field(() => ProductVariantStyleMinAggregate, {nullable:true})
    min?: ProductVariantStyleMinAggregate;

    @Field(() => ProductVariantStyleMaxAggregate, {nullable:true})
    _max?: ProductVariantStyleMaxAggregate;

    @Field(() => ProductVariantStyleMaxAggregate, {nullable:true})
    max?: ProductVariantStyleMaxAggregate;
}
