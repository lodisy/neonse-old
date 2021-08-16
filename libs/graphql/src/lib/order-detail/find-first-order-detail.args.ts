import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderDetailWhereInput } from './order-detail-where.input';
import { OrderDetailOrderByInput } from './order-detail-order-by.input';
import { OrderDetailWhereUniqueInput } from './order-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderDetailScalarFieldEnum } from './order-detail-scalar-field.enum';

@ArgsType()
export class FindFirstOrderDetailArgs {

    @Field(() => OrderDetailWhereInput, {nullable:true})
    where?: OrderDetailWhereInput;

    @Field(() => [OrderDetailOrderByInput], {nullable:true})
    orderBy?: Array<OrderDetailOrderByInput>;

    @Field(() => OrderDetailWhereUniqueInput, {nullable:true})
    cursor?: OrderDetailWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderDetailScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderDetailScalarFieldEnum>;
}
