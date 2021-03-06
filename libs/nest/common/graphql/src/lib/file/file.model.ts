import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Int } from '@nestjs/graphql';
import { Source } from '../source/source.model';
import { GraphQLJSON } from 'graphql-type-json';
import { Profile } from '../profile/profile.model';
import { OrderItem } from '../order-item/order-item.model';
import { Product } from '../product/product.model';
import { ProductVariant } from '../product-variant/product-variant.model';
import { ProductVariantStyle } from '../product-variant-style/product-variant-style.model';
import { Review } from '../review/review.model';
import { FileCount } from './file-count.output';

/** 文件 */
@ObjectType({description:'文件'})
export class File {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    alt!: string | null;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:true})
    caption!: string | null;

    @Field(() => FileType, {nullable:false})
    format!: keyof typeof FileType;

    @Field(() => String, {nullable:false})
    mimeType!: string;

    @Field(() => Int, {nullable:true})
    size!: number | null;

    @Field(() => Int, {nullable:true})
    width!: number | null;

    @Field(() => Int, {nullable:true})
    height!: number | null;

    @Field(() => Source, {nullable:true})
    source?: Source;

    @Field(() => String, {nullable:true})
    sourceId!: string | null;

    @Field(() => Boolean, {nullable:true})
    autoPlay!: boolean | null;

    @Field(() => GraphQLJSON, {nullable:true})
    customFields!: any | null;

    /** deleting a profile will delete all his uploads */
    @Field(() => Profile, {nullable:true,description:'deleting a profile will delete all his uploads'})
    profile?: Profile;

    @Field(() => String, {nullable:true})
    profileId!: string | null;

    @Field(() => Profile, {nullable:true})
    profileAvatar?: Profile;

    @Field(() => String, {nullable:true})
    profileAvatarId!: string | null;

    @Field(() => [OrderItem], {nullable:true})
    OrderItem?: Array<OrderItem>;

    @Field(() => Product, {nullable:true})
    Product?: Product;

    @Field(() => String, {nullable:true})
    productId!: string | null;

    @Field(() => ProductVariant, {nullable:true})
    ProductVariant?: ProductVariant;

    @Field(() => String, {nullable:true})
    productVariantId!: string | null;

    @Field(() => [ProductVariantStyle], {nullable:true})
    ProductVariantStyle?: Array<ProductVariantStyle>;

    /** deleting a review will delete all its uploads */
    @Field(() => Review, {nullable:true,description:'deleting a review will delete all its uploads'})
    Review?: Review;

    @Field(() => String, {nullable:true})
    reviewId!: string | null;

    @Field(() => FileCount, {nullable:true})
    _count?: FileCount;
}
