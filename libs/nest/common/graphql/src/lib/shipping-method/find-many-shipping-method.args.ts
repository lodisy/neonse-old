import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodWhereInput } from './shipping-method-where.input';
import { ShippingMethodOrderByInput } from './shipping-method-order-by.input';
import { ShippingMethodWhereUniqueInput } from './shipping-method-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShippingMethodScalarFieldEnum } from './shipping-method-scalar-field.enum';

@ArgsType()
export class FindManyShippingMethodArgs {

    @Field(() => ShippingMethodWhereInput, {nullable:true})
    where?: ShippingMethodWhereInput;

    @Field(() => [ShippingMethodOrderByInput], {nullable:true})
    orderBy?: Array<ShippingMethodOrderByInput>;

    @Field(() => ShippingMethodWhereUniqueInput, {nullable:true})
    cursor?: ShippingMethodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShippingMethodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShippingMethodScalarFieldEnum>;
}
