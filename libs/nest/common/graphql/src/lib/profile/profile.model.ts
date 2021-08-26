import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { File } from '../file/file.model';
import { Int } from '@nestjs/graphql';
import { Brand } from '../brand/brand.model';
import { Address } from '../address/address.model';
import { Card } from '../card/card.model';
import { Comment } from '../comment/comment.model';
import { Like } from '../like/like.model';
import { Review } from '../review/review.model';

/** Profile */
/** Profile */
/** Profile */
/** Profile */
/** Profile */
/** Profile */
/** Profile */
/** Profile */
/** Profile */
/** Profile */
/** Profile */
/** Profile */
/** Profile */
@ObjectType({description:'Profile'})
export class Profile {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => User, {nullable:false})
    user?: User;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    phone!: bigint | null;
    @Field(() => File, {nullable:true})
    avatar?: File;
    @Field(() => Int, {nullable:true,defaultValue:0})
    point!: number | null;
    @Field(() => Int, {nullable:true})
    level!: number | null;
    @Field(() => [Brand], {nullable:true})
    brands?: Array<Brand>;
    @Field(() => [Address], {nullable:true})
    addresses?: Array<Address>;
    @Field(() => [Card], {nullable:true})
    cards?: Array<Card>;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;
    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;
    @Field(() => [File], {nullable:true})
    uploads?: Array<File>;
    @Field(() => [Profile], {nullable:true})
    followedBy?: Array<Profile>;
    @Field(() => [Profile], {nullable:true})
    following?: Array<Profile>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
}
