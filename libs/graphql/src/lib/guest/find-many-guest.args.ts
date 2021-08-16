import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuestWhereInput } from './guest-where.input';
import { GuestOrderByInput } from './guest-order-by.input';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GuestScalarFieldEnum } from './guest-scalar-field.enum';

@ArgsType()
export class FindManyGuestArgs {

    @Field(() => GuestWhereInput, {nullable:true})
    where?: GuestWhereInput;

    @Field(() => [GuestOrderByInput], {nullable:true})
    orderBy?: Array<GuestOrderByInput>;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    cursor?: GuestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GuestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuestScalarFieldEnum>;
}
