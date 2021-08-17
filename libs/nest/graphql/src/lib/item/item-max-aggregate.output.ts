import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ItemMaxAggregate {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => Int, { nullable: true })
    quantity?: number
}
