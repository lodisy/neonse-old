import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AddressWhereUniqueInput } from './address-where-unique.input'
import { AddressUpdateWithoutProfileInput } from './address-update-without-profile.input'
import { AddressCreateWithoutProfileInput } from './address-create-without-profile.input'

@InputType()
export class AddressUpsertWithWhereUniqueWithoutProfileInput {
    @Field(() => AddressWhereUniqueInput, { nullable: false })
    where!: AddressWhereUniqueInput

    @Field(() => AddressUpdateWithoutProfileInput, { nullable: false })
    update!: AddressUpdateWithoutProfileInput

    @Field(() => AddressCreateWithoutProfileInput, { nullable: false })
    create!: AddressCreateWithoutProfileInput
}
