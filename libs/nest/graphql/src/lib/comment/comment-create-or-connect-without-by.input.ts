import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CommentWhereUniqueInput } from './comment-where-unique.input'
import { CommentCreateWithoutByInput } from './comment-create-without-by.input'

@InputType()
export class CommentCreateOrConnectWithoutByInput {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput

    @Field(() => CommentCreateWithoutByInput, { nullable: false })
    create!: CommentCreateWithoutByInput
}
