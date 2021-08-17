import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LikeCreateManyInput } from './like-create-many.input'

@ArgsType()
export class CreateManyLikeArgs {
    @Field(() => [LikeCreateManyInput], { nullable: false })
    data!: Array<LikeCreateManyInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
