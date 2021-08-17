import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LikeWhereUniqueInput } from './like-where-unique.input'
import { LikeUpdateWithoutProductInput } from './like-update-without-product.input'

@InputType()
export class LikeUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => LikeWhereUniqueInput, { nullable: false })
    where!: LikeWhereUniqueInput

    @Field(() => LikeUpdateWithoutProductInput, { nullable: false })
    data!: LikeUpdateWithoutProductInput
}
