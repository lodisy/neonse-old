import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AuthenticationMethodCountOrderByAggregateInput } from './authentication-method-count-order-by-aggregate.input';
import { AuthenticationMethodMaxOrderByAggregateInput } from './authentication-method-max-order-by-aggregate.input';
import { AuthenticationMethodMinOrderByAggregateInput } from './authentication-method-min-order-by-aggregate.input';

@InputType()
export class AuthenticationMethodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    strategy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => AuthenticationMethodCountOrderByAggregateInput, {nullable:true})
    _count?: AuthenticationMethodCountOrderByAggregateInput;

    @Field(() => AuthenticationMethodMaxOrderByAggregateInput, {nullable:true})
    _max?: AuthenticationMethodMaxOrderByAggregateInput;

    @Field(() => AuthenticationMethodMinOrderByAggregateInput, {nullable:true})
    _min?: AuthenticationMethodMinOrderByAggregateInput;
}
