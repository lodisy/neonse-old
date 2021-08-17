import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { EnumFileTypeFilter } from '../prisma/enum-file-type-filter.input'
import { BytesFilter } from '../prisma/bytes-filter.input'
import { IntNullableFilter } from '../prisma/int-nullable-filter.input'
import { SourceRelationFilter } from '../source/source-relation-filter.input'
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input'
import { ReviewRelationFilter } from '../review/review-relation-filter.input'

@InputType()
export class FileWhereInput {
    @Field(() => [FileWhereInput], { nullable: true })
    AND?: Array<FileWhereInput>

    @Field(() => [FileWhereInput], { nullable: true })
    OR?: Array<FileWhereInput>

    @Field(() => [FileWhereInput], { nullable: true })
    NOT?: Array<FileWhereInput>

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter

    @Field(() => StringNullableFilter, { nullable: true })
    alt?: StringNullableFilter

    @Field(() => StringNullableFilter, { nullable: true })
    title?: StringNullableFilter

    @Field(() => StringNullableFilter, { nullable: true })
    caption?: StringNullableFilter

    @Field(() => EnumFileTypeFilter, { nullable: true })
    format?: EnumFileTypeFilter

    @Field(() => BytesFilter, { nullable: true })
    size?: BytesFilter

    @Field(() => IntNullableFilter, { nullable: true })
    width?: IntNullableFilter

    @Field(() => IntNullableFilter, { nullable: true })
    height?: IntNullableFilter

    @Field(() => SourceRelationFilter, { nullable: true })
    source?: SourceRelationFilter

    @Field(() => BoolNullableFilter, { nullable: true })
    autoPlay?: BoolNullableFilter

    @Field(() => DateTimeFilter, { nullable: true })
    createdAt?: DateTimeFilter

    @Field(() => DateTimeFilter, { nullable: true })
    updatedAt?: DateTimeFilter

    @Field(() => ProfileRelationFilter, { nullable: true })
    profile?: ProfileRelationFilter

    @Field(() => StringNullableFilter, { nullable: true })
    profileId?: StringNullableFilter

    @Field(() => ProfileRelationFilter, { nullable: true })
    profileAvatar?: ProfileRelationFilter

    @Field(() => StringNullableFilter, { nullable: true })
    profileAvatarId?: StringNullableFilter

    @Field(() => ReviewRelationFilter, { nullable: true })
    review?: ReviewRelationFilter

    @Field(() => StringNullableFilter, { nullable: true })
    reviewId?: StringNullableFilter
}
