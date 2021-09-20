import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductVariantStyleCount {

    @Field(() => Int, {nullable:false})
    translations!: number;
}
