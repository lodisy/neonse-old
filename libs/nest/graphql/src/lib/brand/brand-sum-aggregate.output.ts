import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class BrandSumAggregate {
    @Field(() => Int, { nullable: true })
    year?: number
}
