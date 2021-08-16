import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProductOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sku?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    images?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discription?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    featured?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    draft?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sold?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
