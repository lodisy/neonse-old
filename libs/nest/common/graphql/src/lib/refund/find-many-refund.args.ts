import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundWhereInput } from './refund-where.input';
import { RefundOrderByWithRelationInput } from './refund-order-by-with-relation.input';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RefundScalarFieldEnum } from './refund-scalar-field.enum';

@ArgsType()
export class FindManyRefundArgs {

    @Field(() => RefundWhereInput, {nullable:true})
    where?: RefundWhereInput;

    @Field(() => [RefundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefundOrderByWithRelationInput>;

    @Field(() => RefundWhereUniqueInput, {nullable:true})
    cursor?: RefundWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RefundScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RefundScalarFieldEnum>;
}
