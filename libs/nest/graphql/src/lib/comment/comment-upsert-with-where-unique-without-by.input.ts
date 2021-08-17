import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CommentWhereUniqueInput } from './comment-where-unique.input'
import { CommentUpdateWithoutByInput } from './comment-update-without-by.input'
import { CommentCreateWithoutByInput } from './comment-create-without-by.input'

@InputType()
export class CommentUpsertWithWhereUniqueWithoutByInput {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput

    @Field(() => CommentUpdateWithoutByInput, { nullable: false })
    update!: CommentUpdateWithoutByInput

    @Field(() => CommentCreateWithoutByInput, { nullable: false })
    create!: CommentCreateWithoutByInput
}
