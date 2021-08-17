import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { GuestUpdateInput } from './guest-update.input'
import { GuestWhereUniqueInput } from './guest-where-unique.input'

@ArgsType()
export class UpdateOneGuestArgs {
    @Field(() => GuestUpdateInput, { nullable: false })
    data!: GuestUpdateInput

    @Field(() => GuestWhereUniqueInput, { nullable: false })
    where!: GuestWhereUniqueInput
}
