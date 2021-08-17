import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class ItemAvgAggregate {
    @Field(() => Float, { nullable: true })
    quantity?: number
}
