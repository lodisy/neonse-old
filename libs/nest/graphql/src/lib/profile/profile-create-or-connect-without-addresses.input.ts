import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileCreateWithoutAddressesInput } from './profile-create-without-addresses.input'

@InputType()
export class ProfileCreateOrConnectWithoutAddressesInput {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput

    @Field(() => ProfileCreateWithoutAddressesInput, { nullable: false })
    create!: ProfileCreateWithoutAddressesInput
}
