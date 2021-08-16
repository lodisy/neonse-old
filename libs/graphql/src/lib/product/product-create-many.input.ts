import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateManyimagesInput } from './product-create-manyimages.input';

@InputType()
export class ProductCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => String, {nullable:false})
    discription!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Boolean, {nullable:true})
    featured?: boolean;

    @Field(() => Boolean, {nullable:true})
    draft?: boolean;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Int, {nullable:true})
    sold?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateManyimagesInput, {nullable:true})
    images?: ProductCreateManyimagesInput;
}
