import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { Product } from '../product/product.model';
import { Int } from '@nestjs/graphql';
import { File } from '../file/file.model';

/** 商品评价 */
@ObjectType({description:'商品评价'})
export class Review {

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

    @Field(() => Product, {nullable:true})
    product?: Product;

    @Field(() => String, {nullable:true})
    productId!: string | null;

    /** 评分 1-5 */
    @Field(() => Int, {nullable:false,description:'评分 1-5'})
    rate!: number;

    @Field(() => String, {nullable:true})
    description!: string | null;

    /** 买��秀 */
    @Field(() => [File], {nullable:true,description:'买��秀'})
    uploads?: Array<File>;
}
