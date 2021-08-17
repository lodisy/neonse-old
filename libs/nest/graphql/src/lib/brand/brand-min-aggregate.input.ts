import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class BrandMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true

    @Field(() => Boolean, { nullable: true })
    name?: true

    @Field(() => Boolean, { nullable: true })
    slug?: true

    @Field(() => Boolean, { nullable: true })
    country?: true

    @Field(() => Boolean, { nullable: true })
    year?: true

    @Field(() => Boolean, { nullable: true })
    description?: true
}
