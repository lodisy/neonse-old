import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@InputType()
export class CardWhereUniqueInput {
    @HideField()
    id?: string

    @Field(() => String, { nullable: true })
    profileId?: string

    @Field(() => String, { nullable: true })
    number?: bigint | number
}
