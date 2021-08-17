import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ProductTypeCountAggregate } from './product-type-count-aggregate.output'
import { ProductTypeMinAggregate } from './product-type-min-aggregate.output'
import { ProductTypeMaxAggregate } from './product-type-max-aggregate.output'

@ObjectType()
export class ProductTypeGroupBy {
    @Field(() => String, { nullable: false })
    id!: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    slug!: string

    @Field(() => ProductTypeCountAggregate, { nullable: true })
    _count?: ProductTypeCountAggregate

    @Field(() => ProductTypeMinAggregate, { nullable: true })
    _min?: ProductTypeMinAggregate

    @Field(() => ProductTypeMaxAggregate, { nullable: true })
    _max?: ProductTypeMaxAggregate
}
