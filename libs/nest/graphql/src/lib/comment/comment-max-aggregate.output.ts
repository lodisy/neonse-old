import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CommentMaxAggregate {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    email?: string

    @Field(() => String, { nullable: true })
    profileId?: string

    @Field(() => String, { nullable: true })
    content?: string
}
