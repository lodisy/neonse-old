import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { Product } from '../product/product.model';
import { Int } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { ReviewCount } from './review-count.output';

/** 商品评价 */
@ObjectType({description:'商品评价'})
export class Review {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    /** Deleting a profile will delete all its reviews */
    @Field(() => Profile, {nullable:false,description:'Deleting a profile will delete all its reviews'})
    by?: Profile;

    @Field(() => String, {nullable:false})
    profileId!: string;

    /** Unable to delete a product with review */
    @Field(() => Product, {nullable:true,description:'Unable to delete a product with review'})
    product?: Product;

    @Field(() => String, {nullable:true})
    productId!: string | null;

    /** 评分 1-5 */
    @Field(() => Int, {nullable:false,description:'评分 1-5'})
    rate!: number;

    @Field(() => String, {nullable:true})
    description!: string | null;

    /** 买家秀 */
    @Field(() => [File], {nullable:true,description:'买家秀'})
    uploads?: Array<File>;

    @Field(() => ReviewCount, {nullable:true})
    _count?: ReviewCount;
}
