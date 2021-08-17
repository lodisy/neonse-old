import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateManyForInput } from './review-create-many-for.input'

@InputType()
export class ReviewCreateManyForInputEnvelope {
    @Field(() => [ReviewCreateManyForInput], { nullable: false })
    data!: Array<ReviewCreateManyForInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
