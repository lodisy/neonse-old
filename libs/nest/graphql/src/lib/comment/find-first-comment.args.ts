import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CommentWhereInput } from './comment-where.input'
import { CommentOrderByInput } from './comment-order-by.input'
import { CommentWhereUniqueInput } from './comment-where-unique.input'
import { Int } from '@nestjs/graphql'
import { CommentScalarFieldEnum } from './comment-scalar-field.enum'

@ArgsType()
export class FindFirstCommentArgs {
    @Field(() => CommentWhereInput, { nullable: true })
    where?: CommentWhereInput

    @Field(() => [CommentOrderByInput], { nullable: true })
    orderBy?: Array<CommentOrderByInput>

    @Field(() => CommentWhereUniqueInput, { nullable: true })
    cursor?: CommentWhereUniqueInput

    @Field(() => Int, { nullable: true })
    take?: number

    @Field(() => Int, { nullable: true })
    skip?: number

    @Field(() => [CommentScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof CommentScalarFieldEnum>
}
