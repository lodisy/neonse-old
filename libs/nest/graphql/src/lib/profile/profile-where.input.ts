import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { HideField } from '@nestjs/graphql'
import { UserRelationFilter } from '../user/user-relation-filter.input'
import { BrandListRelationFilter } from '../brand/brand-list-relation-filter.input'
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input'
import { FileRelationFilter } from '../file/file-relation-filter.input'
import { IntNullableFilter } from '../prisma/int-nullable-filter.input'
import { AddressListRelationFilter } from '../address/address-list-relation-filter.input'
import { CardListRelationFilter } from '../card/card-list-relation-filter.input'
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input'
import { FileListRelationFilter } from '../file/file-list-relation-filter.input'
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input'
import { ProfileListRelationFilter } from './profile-list-relation-filter.input'
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input'

@InputType()
export class ProfileWhereInput {
    @Field(() => [ProfileWhereInput], { nullable: true })
    AND?: Array<ProfileWhereInput>

    @Field(() => [ProfileWhereInput], { nullable: true })
    OR?: Array<ProfileWhereInput>

    @Field(() => [ProfileWhereInput], { nullable: true })
    NOT?: Array<ProfileWhereInput>

    @HideField()
    id?: StringFilter

    @Field(() => UserRelationFilter, { nullable: true })
    user?: UserRelationFilter

    @Field(() => StringFilter, { nullable: true })
    userId?: StringFilter

    @HideField()
    brands?: BrandListRelationFilter

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter

    @Field(() => BigIntNullableFilter, { nullable: true })
    phone?: BigIntNullableFilter

    @Field(() => FileRelationFilter, { nullable: true })
    avatar?: FileRelationFilter

    @Field(() => IntNullableFilter, { nullable: true })
    point?: IntNullableFilter

    @Field(() => IntNullableFilter, { nullable: true })
    level?: IntNullableFilter

    @Field(() => AddressListRelationFilter, { nullable: true })
    addresses?: AddressListRelationFilter

    @Field(() => CardListRelationFilter, { nullable: true })
    cards?: CardListRelationFilter

    @Field(() => ReviewListRelationFilter, { nullable: true })
    reviews?: ReviewListRelationFilter

    @Field(() => FileListRelationFilter, { nullable: true })
    uploads?: FileListRelationFilter

    @Field(() => LikeListRelationFilter, { nullable: true })
    likes?: LikeListRelationFilter

    @Field(() => ProfileListRelationFilter, { nullable: true })
    followedBy?: ProfileListRelationFilter

    @Field(() => ProfileListRelationFilter, { nullable: true })
    following?: ProfileListRelationFilter

    @Field(() => CommentListRelationFilter, { nullable: true })
    comments?: CommentListRelationFilter
}
