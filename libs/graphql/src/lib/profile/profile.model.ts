import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Brand } from '../brand/brand.model';
import { Int } from '@nestjs/graphql';
import { Address } from '../address/address.model';
import { Card } from '../card/card.model';
import { Review } from '../review/review.model';
import { File } from '../file/file.model';
import { Like } from '../like/like.model';
import { Comment } from '../comment/comment.model';

@ObjectType()
export class Profile {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => User, {nullable:true})
    user?: User;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => [Brand], {nullable:true})
    brands?: Array<Brand>;
    @Field(() => String, {nullable:true})
    brandId!: string | null;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    phone!: bigint | null;
    @Field(() => String, {nullable:true})
    avatar!: string | null;
    @Field(() => Int, {nullable:true})
    point!: number | null;
    @Field(() => Int, {nullable:true})
    level!: number | null;
    @Field(() => [Address], {nullable:true})
    addresses?: Array<Address>;
    @Field(() => [Card], {nullable:true})
    cards?: Array<Card>;
    @Field(() => [Profile], {nullable:true})
    followedBy?: Array<Profile>;
    @Field(() => [Profile], {nullable:true})
    following?: Array<Profile>;
    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;
    @Field(() => [File], {nullable:true})
    uploads?: Array<File>;
    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
}
