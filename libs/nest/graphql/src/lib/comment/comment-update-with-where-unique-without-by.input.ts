import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CommentWhereUniqueInput } from './comment-where-unique.input'
import { CommentUpdateWithoutByInput } from './comment-update-without-by.input'

@InputType()
export class CommentUpdateWithWhereUniqueWithoutByInput {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput

    @Field(() => CommentUpdateWithoutByInput, { nullable: false })
    data!: CommentUpdateWithoutByInput
}
