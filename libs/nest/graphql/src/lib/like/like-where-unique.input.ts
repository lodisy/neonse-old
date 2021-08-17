import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class LikeWhereUniqueInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    profileId?: string

    @Field(() => String, { nullable: true })
    productId?: string
}
