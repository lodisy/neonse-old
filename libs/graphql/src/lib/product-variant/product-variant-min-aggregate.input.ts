import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ProductVariantMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    productId?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @HideField()
    sku?: true;

    @Field(() => Boolean, {nullable:true})
    brands?: true;

    @Field(() => Boolean, {nullable:true})
    style?: true;

    @Field(() => Boolean, {nullable:true})
    size?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    sale?: true;

    @Field(() => Boolean, {nullable:true})
    stock?: true;

    @Field(() => Boolean, {nullable:true})
    sold?: true;
}
