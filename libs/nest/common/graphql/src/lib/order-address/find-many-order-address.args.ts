import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderAddressWhereInput } from './order-address-where.input';
import { OrderAddressOrderByWithRelationInput } from './order-address-order-by-with-relation.input';
import { OrderAddressWhereUniqueInput } from './order-address-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderAddressScalarFieldEnum } from './order-address-scalar-field.enum';

@ArgsType()
export class FindManyOrderAddressArgs {

    @Field(() => OrderAddressWhereInput, {nullable:true})
    where?: OrderAddressWhereInput;

    @Field(() => [OrderAddressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderAddressOrderByWithRelationInput>;

    @Field(() => OrderAddressWhereUniqueInput, {nullable:true})
    cursor?: OrderAddressWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderAddressScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderAddressScalarFieldEnum>;
}
