import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { OrderOrderByWithRelationInput } from './order-order-by-with-relation.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderScalarFieldEnum } from './order-scalar-field.enum';

@ArgsType()
export class FindManyOrderArgs {

    @Field(() => OrderWhereInput, {nullable:true})
    where?: OrderWhereInput;

    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: OrderWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
