import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileCreateManyReviewInput } from './file-create-many-review.input'

@InputType()
export class FileCreateManyReviewInputEnvelope {
    @Field(() => [FileCreateManyReviewInput], { nullable: false })
    data!: Array<FileCreateManyReviewInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
