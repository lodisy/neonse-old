import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ReviewCreateManyInput } from './review-create-many.input'

@ArgsType()
export class CreateManyReviewArgs {
    @Field(() => [ReviewCreateManyInput], { nullable: false })
    data!: Array<ReviewCreateManyInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
