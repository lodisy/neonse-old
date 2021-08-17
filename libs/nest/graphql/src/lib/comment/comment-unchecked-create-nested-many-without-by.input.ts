import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CommentCreateWithoutByInput } from './comment-create-without-by.input'
import { CommentCreateOrConnectWithoutByInput } from './comment-create-or-connect-without-by.input'
import { CommentCreateManyByInputEnvelope } from './comment-create-many-by-input-envelope.input'
import { CommentWhereUniqueInput } from './comment-where-unique.input'

@InputType()
export class CommentUncheckedCreateNestedManyWithoutByInput {
    @Field(() => [CommentCreateWithoutByInput], { nullable: true })
    create?: Array<CommentCreateWithoutByInput>

    @Field(() => [CommentCreateOrConnectWithoutByInput], { nullable: true })
    connectOrCreate?: Array<CommentCreateOrConnectWithoutByInput>

    @Field(() => CommentCreateManyByInputEnvelope, { nullable: true })
    createMany?: CommentCreateManyByInputEnvelope

    @Field(() => [CommentWhereUniqueInput], { nullable: true })
    connect?: Array<CommentWhereUniqueInput>
}
