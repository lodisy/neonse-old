import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LikeWhereUniqueInput } from './like-where-unique.input'
import { LikeUpdateWithoutProductInput } from './like-update-without-product.input'
import { LikeCreateWithoutProductInput } from './like-create-without-product.input'

@InputType()
export class LikeUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => LikeWhereUniqueInput, { nullable: false })
    where!: LikeWhereUniqueInput

    @Field(() => LikeUpdateWithoutProductInput, { nullable: false })
    update!: LikeUpdateWithoutProductInput

    @Field(() => LikeCreateWithoutProductInput, { nullable: false })
    create!: LikeCreateWithoutProductInput
}
