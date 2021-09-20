import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShippingMethodCount {

    @Field(() => Int, {nullable:false})
    translations!: number;
}
