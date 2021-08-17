import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class OrderDetailCountAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true

    @Field(() => Boolean, { nullable: true })
    _all?: true
}
