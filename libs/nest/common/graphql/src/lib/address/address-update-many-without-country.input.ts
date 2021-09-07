import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutCountryInput } from './address-create-without-country.input';
import { AddressCreateOrConnectWithoutCountryInput } from './address-create-or-connect-without-country.input';
import { AddressUpsertWithWhereUniqueWithoutCountryInput } from './address-upsert-with-where-unique-without-country.input';
import { AddressCreateManyCountryInputEnvelope } from './address-create-many-country-input-envelope.input';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithWhereUniqueWithoutCountryInput } from './address-update-with-where-unique-without-country.input';
import { AddressUpdateManyWithWhereWithoutCountryInput } from './address-update-many-with-where-without-country.input';
import { AddressScalarWhereInput } from './address-scalar-where.input';

@InputType()
export class AddressUpdateManyWithoutCountryInput {

    @Field(() => [AddressCreateWithoutCountryInput], {nullable:true})
    create?: Array<AddressCreateWithoutCountryInput>;

    @Field(() => [AddressCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCountryInput>;

    @Field(() => [AddressUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutCountryInput>;

    @Field(() => AddressCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: AddressCreateManyCountryInputEnvelope;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    connect?: Array<AddressWhereUniqueInput>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    set?: Array<AddressWhereUniqueInput>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    disconnect?: Array<AddressWhereUniqueInput>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    delete?: Array<AddressWhereUniqueInput>;

    @Field(() => [AddressUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    update?: Array<AddressUpdateWithWhereUniqueWithoutCountryInput>;

    @Field(() => [AddressUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    updateMany?: Array<AddressUpdateManyWithWhereWithoutCountryInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    deleteMany?: Array<AddressScalarWhereInput>;
}
