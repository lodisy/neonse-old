import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class LocaleMinAggregate {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    code?: string
}
