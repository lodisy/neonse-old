import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class GuestMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    identifierToken?: true

    @Field(() => Boolean, { nullable: true })
    email?: true
}
