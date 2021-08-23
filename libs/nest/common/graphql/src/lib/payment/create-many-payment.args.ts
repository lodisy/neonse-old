import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentCreateManyInput } from './payment-create-many.input';

@ArgsType()
export class CreateManyPaymentArgs {

    @Field(() => [PaymentCreateManyInput], {nullable:false})
    data!: Array<PaymentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
