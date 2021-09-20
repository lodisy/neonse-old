import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductVariantCount {

    @Field(() => Int, {nullable:false})
    assets!: number;

    @Field(() => Int, {nullable:false})
    channels!: number;

    @Field(() => Int, {nullable:false})
    translations!: number;
}
