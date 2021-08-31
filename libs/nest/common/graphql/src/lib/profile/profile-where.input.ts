import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FileRelationFilter } from '../file/file-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BrandListRelationFilter } from '../brand/brand-list-relation-filter.input';
import { AddressListRelationFilter } from '../address/address-list-relation-filter.input';
import { CardListRelationFilter } from '../card/card-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { FileListRelationFilter } from '../file/file-list-relation-filter.input';
import { ProfileListRelationFilter } from './profile-list-relation-filter.input';

@InputType()
export class ProfileWhereInput {

    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile?: StringNullableFilter;

    @Field(() => FileRelationFilter, {nullable:true})
    avatar?: FileRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    point?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    level?: IntNullableFilter;

    @Field(() => BrandListRelationFilter, {nullable:true})
    brands?: BrandListRelationFilter;

    @Field(() => AddressListRelationFilter, {nullable:true})
    addresses?: AddressListRelationFilter;

    @Field(() => CardListRelationFilter, {nullable:true})
    cards?: CardListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => LikeListRelationFilter, {nullable:true})
    likes?: LikeListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    uploads?: FileListRelationFilter;

    @Field(() => ProfileListRelationFilter, {nullable:true})
    followedBy?: ProfileListRelationFilter;

    @Field(() => ProfileListRelationFilter, {nullable:true})
    following?: ProfileListRelationFilter;
}
