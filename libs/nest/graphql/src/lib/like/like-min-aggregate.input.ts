import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class LikeMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true

    @Field(() => Boolean, { nullable: true })
    profileId?: true

    @Field(() => Boolean, { nullable: true })
    type?: true

    @Field(() => Boolean, { nullable: true })
    productId?: true

    @Field(() => Boolean, { nullable: true })
    createdAt?: true
}
