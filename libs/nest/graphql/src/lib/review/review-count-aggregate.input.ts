import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ReviewCountAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true

    @Field(() => Boolean, { nullable: true })
    profileId?: true

    @Field(() => Boolean, { nullable: true })
    productId?: true

    @Field(() => Boolean, { nullable: true })
    rate?: true

    @Field(() => Boolean, { nullable: true })
    description?: true

    @Field(() => Boolean, { nullable: true })
    _all?: true
}
