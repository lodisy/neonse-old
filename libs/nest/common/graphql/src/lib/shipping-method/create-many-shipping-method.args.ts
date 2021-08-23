import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodCreateManyInput } from './shipping-method-create-many.input';

@ArgsType()
export class CreateManyShippingMethodArgs {

    @Field(() => [ShippingMethodCreateManyInput], {nullable:false})
    data!: Array<ShippingMethodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
