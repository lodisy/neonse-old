import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderAddressMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    phone?: true;

    @Field(() => Boolean, {nullable:true})
    fullname?: true;

    @Field(() => Boolean, {nullable:true})
    company?: true;

    @Field(() => Boolean, {nullable:true})
    streetLine1?: true;

    @Field(() => Boolean, {nullable:true})
    streetLine2?: true;

    @Field(() => Boolean, {nullable:true})
    district?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    state?: true;

    @Field(() => Boolean, {nullable:true})
    postalCode?: true;

    @Field(() => Boolean, {nullable:true})
    country?: true;

    @Field(() => Boolean, {nullable:true})
    orderId?: true;
}
