import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileWhereUniqueInput } from './file-where-unique.input'
import { FileUpdateWithoutReviewInput } from './file-update-without-review.input'
import { FileCreateWithoutReviewInput } from './file-create-without-review.input'

@InputType()
export class FileUpsertWithWhereUniqueWithoutReviewInput {
    @Field(() => FileWhereUniqueInput, { nullable: false })
    where!: FileWhereUniqueInput

    @Field(() => FileUpdateWithoutReviewInput, { nullable: false })
    update!: FileUpdateWithoutReviewInput

    @Field(() => FileCreateWithoutReviewInput, { nullable: false })
    create!: FileCreateWithoutReviewInput
}
