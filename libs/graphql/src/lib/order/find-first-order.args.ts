import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { OrderOrderByInput } from './order-order-by.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderScalarFieldEnum } from './order-scalar-field.enum';

@ArgsType()
export class FindFirstOrderArgs {

    @Field(() => OrderWhereInput, {nullable:true})
    where?: OrderWhereInput;

    @Field(() => [OrderOrderByInput], {nullable:true})
    orderBy?: Array<OrderOrderByInput>;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: OrderWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
