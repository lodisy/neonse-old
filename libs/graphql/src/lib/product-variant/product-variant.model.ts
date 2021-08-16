import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { Size } from '../prisma/size.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductVariant {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Product, {nullable:false})
    product?: Product;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @Field(() => String, {nullable:false})
    sku!: string;
    @Field(() => [String], {nullable:true})
    images!: Array<string>;
    @Field(() => String, {nullable:false})
    brands!: string;
    @Field(() => String, {nullable:false})
    style!: string;
    @Field(() => Size, {nullable:false})
    size!: keyof typeof Size;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    sale!: number;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:false})
    sold!: number;
}
