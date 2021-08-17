import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@InputType()
export class SourceCountAggregateInput {
    @HideField()
    id?: true

    @Field(() => Boolean, { nullable: true })
    name?: true

    @Field(() => Boolean, { nullable: true })
    link?: true

    @Field(() => Boolean, { nullable: true })
    fileId?: true

    @Field(() => Boolean, { nullable: true })
    _all?: true
}
