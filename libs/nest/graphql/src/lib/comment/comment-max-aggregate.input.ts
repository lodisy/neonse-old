import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class CommentMaxAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true

    @Field(() => Boolean, { nullable: true })
    name?: true

    @Field(() => Boolean, { nullable: true })
    email?: true

    @Field(() => Boolean, { nullable: true })
    profileId?: true

    @Field(() => Boolean, { nullable: true })
    content?: true
}
