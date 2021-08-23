import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressCreateWithoutProfileInput } from './address-create-without-profile.input';

@InputType()
export class AddressCreateOrConnectWithoutProfileInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    where!: AddressWhereUniqueInput;

    @Field(() => AddressCreateWithoutProfileInput, {nullable:false})
    create!: AddressCreateWithoutProfileInput;
}
