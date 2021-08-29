import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductVariant } from '../product-variant/product-variant.model';

@ObjectType()
export class ProductVariantSize {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductVariant, {nullable:true})
    productVariant?: ProductVariant;

    @Field(() => String, {nullable:true})
    productVariantId!: string | null;
}
