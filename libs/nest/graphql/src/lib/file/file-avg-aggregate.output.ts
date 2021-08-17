import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class FileAvgAggregate {
    @Field(() => Float, { nullable: true })
    width?: number

    @Field(() => Float, { nullable: true })
    height?: number
}
