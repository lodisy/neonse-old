import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'

@InputType()
export class CommentScalarWhereInput {
    @Field(() => [CommentScalarWhereInput], { nullable: true })
    AND?: Array<CommentScalarWhereInput>

    @Field(() => [CommentScalarWhereInput], { nullable: true })
    OR?: Array<CommentScalarWhereInput>

    @Field(() => [CommentScalarWhereInput], { nullable: true })
    NOT?: Array<CommentScalarWhereInput>

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    email?: StringFilter

    @Field(() => StringNullableFilter, { nullable: true })
    profileId?: StringNullableFilter

    @Field(() => StringFilter, { nullable: true })
    content?: StringFilter
}
