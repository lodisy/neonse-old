import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressCreateManyProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:false})
    street!: string;

    @Field(() => String, {nullable:true})
    district?: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    zip?: string;

    @Field(() => String, {nullable:false})
    country!: string;
}
