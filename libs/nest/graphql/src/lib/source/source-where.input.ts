import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { HideField } from '@nestjs/graphql'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { FileRelationFilter } from '../file/file-relation-filter.input'

@InputType()
export class SourceWhereInput {
    @Field(() => [SourceWhereInput], { nullable: true })
    AND?: Array<SourceWhereInput>

    @Field(() => [SourceWhereInput], { nullable: true })
    OR?: Array<SourceWhereInput>

    @Field(() => [SourceWhereInput], { nullable: true })
    NOT?: Array<SourceWhereInput>

    @HideField()
    id?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter

    @Field(() => StringNullableFilter, { nullable: true })
    link?: StringNullableFilter

    @Field(() => FileRelationFilter, { nullable: true })
    file?: FileRelationFilter

    @Field(() => StringFilter, { nullable: true })
    fileId?: StringFilter
}
