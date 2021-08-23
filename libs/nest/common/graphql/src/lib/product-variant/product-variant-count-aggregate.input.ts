import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductVariantCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    sku?: true;

    @Field(() => Boolean, {nullable:true})
    brands?: true;

    @Field(() => Boolean, {nullable:true})
    currencyCode?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    sale?: true;

    @Field(() => Boolean, {nullable:true})
    stock?: true;

    @Field(() => Boolean, {nullable:true})
    sold?: true;

    @Field(() => Boolean, {nullable:true})
    draft?: true;

    @Field(() => Boolean, {nullable:true})
    productId?: true;

    @Field(() => Boolean, {nullable:true})
    customFields?: true;

    @Field(() => Boolean, {nullable:true})
    languageCode?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
