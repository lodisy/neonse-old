import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductMaxAggregateInput {

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
    discription?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    featured?: true;

    @Field(() => Boolean, {nullable:true})
    draft?: true;

    @Field(() => Boolean, {nullable:true})
    stock?: true;

    @Field(() => Boolean, {nullable:true})
    sold?: true;

    @Field(() => Boolean, {nullable:true})
    languageCode?: true;
}
