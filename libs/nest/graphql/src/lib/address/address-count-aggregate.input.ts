import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class AddressCountAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true

    @Field(() => Boolean, { nullable: true })
    profileId?: true

    @Field(() => Boolean, { nullable: true })
    name?: true

    @Field(() => Boolean, { nullable: true })
    email?: true

    @Field(() => Boolean, { nullable: true })
    phone?: true

    @Field(() => Boolean, { nullable: true })
    street?: true

    @Field(() => Boolean, { nullable: true })
    district?: true

    @Field(() => Boolean, { nullable: true })
    city?: true

    @Field(() => Boolean, { nullable: true })
    state?: true

    @Field(() => Boolean, { nullable: true })
    zip?: true

    @Field(() => Boolean, { nullable: true })
    country?: true

    @Field(() => Boolean, { nullable: true })
    _all?: true
}
