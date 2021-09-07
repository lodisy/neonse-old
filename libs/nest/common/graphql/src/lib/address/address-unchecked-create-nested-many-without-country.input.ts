import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutCountryInput } from './address-create-without-country.input';
import { AddressCreateOrConnectWithoutCountryInput } from './address-create-or-connect-without-country.input';
import { AddressCreateManyCountryInputEnvelope } from './address-create-many-country-input-envelope.input';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressUncheckedCreateNestedManyWithoutCountryInput {

    @Field(() => [AddressCreateWithoutCountryInput], {nullable:true})
    create?: Array<AddressCreateWithoutCountryInput>;

    @Field(() => [AddressCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCountryInput>;

    @Field(() => AddressCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: AddressCreateManyCountryInputEnvelope;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    connect?: Array<AddressWhereUniqueInput>;
}
