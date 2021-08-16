import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithoutProfileInput } from './address-update-without-profile.input';

@InputType()
export class AddressUpdateWithWhereUniqueWithoutProfileInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    where!: AddressWhereUniqueInput;

    @Field(() => AddressUpdateWithoutProfileInput, {nullable:false})
    data!: AddressUpdateWithoutProfileInput;
}
