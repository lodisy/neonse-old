import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileCreateNestedOneWithoutAddressesInput } from '../profile/profile-create-nested-one-without-addresses.input'

@InputType()
export class AddressCreateInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: true })
    email?: string

    @Field(() => String, { nullable: true })
    phone?: string

    @Field(() => String, { nullable: false })
    street!: string

    @Field(() => String, { nullable: true })
    district?: string

    @Field(() => String, { nullable: false })
    city!: string

    @Field(() => String, { nullable: true })
    state?: string

    @Field(() => String, { nullable: true })
    zip?: string

    @Field(() => String, { nullable: false })
    country!: string

    @Field(() => ProfileCreateNestedOneWithoutAddressesInput, { nullable: false })
    profile!: ProfileCreateNestedOneWithoutAddressesInput
}
