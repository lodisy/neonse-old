import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { GuestCreateInput } from './guest-create.input'

@ArgsType()
export class CreateOneGuestArgs {
    @Field(() => GuestCreateInput, { nullable: false })
    data!: GuestCreateInput
}
