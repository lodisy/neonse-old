import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@InputType()
export class CardMaxAggregateInput {
    @HideField()
    id?: true

    @Field(() => Boolean, { nullable: true })
    profileId?: true

    @Field(() => Boolean, { nullable: true })
    number?: true

    @Field(() => Boolean, { nullable: true })
    name?: true

    @Field(() => Boolean, { nullable: true })
    expiration?: true

    @Field(() => Boolean, { nullable: true })
    bank?: true
}
