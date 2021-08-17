import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileCreateWithoutAddressesInput } from './profile-create-without-addresses.input'
import { ProfileCreateOrConnectWithoutAddressesInput } from './profile-create-or-connect-without-addresses.input'
import { ProfileUpsertWithoutAddressesInput } from './profile-upsert-without-addresses.input'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileUpdateWithoutAddressesInput } from './profile-update-without-addresses.input'

@InputType()
export class ProfileUpdateOneRequiredWithoutAddressesInput {
    @Field(() => ProfileCreateWithoutAddressesInput, { nullable: true })
    create?: ProfileCreateWithoutAddressesInput

    @Field(() => ProfileCreateOrConnectWithoutAddressesInput, { nullable: true })
    connectOrCreate?: ProfileCreateOrConnectWithoutAddressesInput

    @Field(() => ProfileUpsertWithoutAddressesInput, { nullable: true })
    upsert?: ProfileUpsertWithoutAddressesInput

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    connect?: ProfileWhereUniqueInput

    @Field(() => ProfileUpdateWithoutAddressesInput, { nullable: true })
    update?: ProfileUpdateWithoutAddressesInput
}
