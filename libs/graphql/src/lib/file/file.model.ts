import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Int } from '@nestjs/graphql';
import { Source } from '../source/source.model';
import { Profile } from '../profile/profile.model';
import { Review } from '../review/review.model';

@ObjectType()
export class File {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    alt!: string | null;
    @Field(() => String, {nullable:true})
    caption!: string | null;
    @Field(() => FileType, {nullable:false})
    type!: keyof typeof FileType;
    @Field(() => String, {nullable:false})
    size!: Buffer;
    @Field(() => String, {nullable:true})
    dimensions!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:true})
    title!: string | null;
    @Field(() => Int, {nullable:true})
    width!: number | null;
    @Field(() => Int, {nullable:true})
    height!: number | null;
    @Field(() => Source, {nullable:true})
    source?: Source;
    @Field(() => Boolean, {nullable:true})
    autoPlay!: boolean | null;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Profile, {nullable:true})
    profile?: Profile;
    @Field(() => String, {nullable:true})
    profileId!: string | null;
    @Field(() => Profile, {nullable:true})
    profileAvatar?: Profile;
    @Field(() => String, {nullable:true})
    profileAvatarId!: string | null;
    @Field(() => Review, {nullable:true})
    review?: Review;
    @Field(() => String, {nullable:true})
    reviewId!: string | null;
    @Field(() => FileType, {nullable:false})
    format!: keyof typeof FileType;
}
