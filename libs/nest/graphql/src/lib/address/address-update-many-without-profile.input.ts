import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AddressCreateWithoutProfileInput } from './address-create-without-profile.input'
import { AddressCreateOrConnectWithoutProfileInput } from './address-create-or-connect-without-profile.input'
import { AddressUpsertWithWhereUniqueWithoutProfileInput } from './address-upsert-with-where-unique-without-profile.input'
import { AddressCreateManyProfileInputEnvelope } from './address-create-many-profile-input-envelope.input'
import { AddressWhereUniqueInput } from './address-where-unique.input'
import { AddressUpdateWithWhereUniqueWithoutProfileInput } from './address-update-with-where-unique-without-profile.input'
import { AddressUpdateManyWithWhereWithoutProfileInput } from './address-update-many-with-where-without-profile.input'
import { AddressScalarWhereInput } from './address-scalar-where.input'

@InputType()
export class AddressUpdateManyWithoutProfileInput {
    @Field(() => [AddressCreateWithoutProfileInput], { nullable: true })
    create?: Array<AddressCreateWithoutProfileInput>

    @Field(() => [AddressCreateOrConnectWithoutProfileInput], { nullable: true })
    connectOrCreate?: Array<AddressCreateOrConnectWithoutProfileInput>

    @Field(() => [AddressUpsertWithWhereUniqueWithoutProfileInput], { nullable: true })
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutProfileInput>

    @Field(() => AddressCreateManyProfileInputEnvelope, { nullable: true })
    createMany?: AddressCreateManyProfileInputEnvelope

    @Field(() => [AddressWhereUniqueInput], { nullable: true })
    connect?: Array<AddressWhereUniqueInput>

    @Field(() => [AddressWhereUniqueInput], { nullable: true })
    set?: Array<AddressWhereUniqueInput>

    @Field(() => [AddressWhereUniqueInput], { nullable: true })
    disconnect?: Array<AddressWhereUniqueInput>

    @Field(() => [AddressWhereUniqueInput], { nullable: true })
    delete?: Array<AddressWhereUniqueInput>

    @Field(() => [AddressUpdateWithWhereUniqueWithoutProfileInput], { nullable: true })
    update?: Array<AddressUpdateWithWhereUniqueWithoutProfileInput>

    @Field(() => [AddressUpdateManyWithWhereWithoutProfileInput], { nullable: true })
    updateMany?: Array<AddressUpdateManyWithWhereWithoutProfileInput>

    @Field(() => [AddressScalarWhereInput], { nullable: true })
    deleteMany?: Array<AddressScalarWhereInput>
}
