import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AddressCreateManyProfileInput } from './address-create-many-profile.input'

@InputType()
export class AddressCreateManyProfileInputEnvelope {
    @Field(() => [AddressCreateManyProfileInput], { nullable: false })
    data!: Array<AddressCreateManyProfileInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
