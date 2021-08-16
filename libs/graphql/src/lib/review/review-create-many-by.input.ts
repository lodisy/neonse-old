import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class ReviewCreateManyByInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(1)
    @Validator.Max(5)
    rate!: number;

    @Field(() => String, {nullable:true})
    description?: string;
}
