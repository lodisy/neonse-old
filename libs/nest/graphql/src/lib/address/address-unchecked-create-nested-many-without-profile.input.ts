import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AddressCreateWithoutProfileInput } from './address-create-without-profile.input'
import { AddressCreateOrConnectWithoutProfileInput } from './address-create-or-connect-without-profile.input'
import { AddressCreateManyProfileInputEnvelope } from './address-create-many-profile-input-envelope.input'
import { AddressWhereUniqueInput } from './address-where-unique.input'

@InputType()
export class AddressUncheckedCreateNestedManyWithoutProfileInput {
    @Field(() => [AddressCreateWithoutProfileInput], { nullable: true })
    create?: Array<AddressCreateWithoutProfileInput>

    @Field(() => [AddressCreateOrConnectWithoutProfileInput], { nullable: true })
    connectOrCreate?: Array<AddressCreateOrConnectWithoutProfileInput>

    @Field(() => AddressCreateManyProfileInputEnvelope, { nullable: true })
    createMany?: AddressCreateManyProfileInputEnvelope

    @Field(() => [AddressWhereUniqueInput], { nullable: true })
    connect?: Array<AddressWhereUniqueInput>
}
