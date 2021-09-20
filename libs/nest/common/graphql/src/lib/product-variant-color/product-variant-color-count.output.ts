import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductVariantColorCount {

    @Field(() => Int, {nullable:false})
    translations!: number;
}
