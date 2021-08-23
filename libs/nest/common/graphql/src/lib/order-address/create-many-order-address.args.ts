import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderAddressCreateManyInput } from './order-address-create-many.input';

@ArgsType()
export class CreateManyOrderAddressArgs {

    @Field(() => [OrderAddressCreateManyInput], {nullable:false})
    data!: Array<OrderAddressCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
