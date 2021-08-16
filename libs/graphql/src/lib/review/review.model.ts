import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { Product } from '../product/product.model';
import { Int } from '@nestjs/graphql';
import { File } from '../file/file.model';

@ObjectType()
export class Review {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Profile, {nullable:false})
    by?: Profile;

    @Field(() => String, {nullable:false})
    profileId!: string;

    @Field(() => Product, {nullable:false})
    for?: Product;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Int, {nullable:false})
    rate!: number;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [File], {nullable:true})
    media?: Array<File>;
}
