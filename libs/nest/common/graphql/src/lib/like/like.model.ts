import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { ContentType } from '../prisma/content-type.enum';
import { Product } from '../product/product.model';

/** 喜欢收藏 */
@ObjectType({description:'喜欢收藏'})
export class Like {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Profile, {nullable:false})
    by?: Profile;

    @Field(() => String, {nullable:false})
    profileId!: string;

    @Field(() => ContentType, {nullable:false})
    type!: keyof typeof ContentType;

    /** deleting a product will delete all its likes */
    @Field(() => Product, {nullable:true,description:'deleting a product will delete all its likes'})
    product?: Product;

    @Field(() => String, {nullable:true})
    productId!: string | null;
}
