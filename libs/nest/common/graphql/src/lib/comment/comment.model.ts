import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';

/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
/** 评论（匿名） */
@ObjectType({description:'评论（匿名）'})
export class Comment {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Profile, {nullable:true})
    by?: Profile;
    @Field(() => String, {nullable:true})
    profileId!: string | null;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
