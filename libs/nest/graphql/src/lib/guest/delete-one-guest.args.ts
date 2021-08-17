import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { GuestWhereUniqueInput } from './guest-where-unique.input'

@ArgsType()
export class DeleteOneGuestArgs {
    @Field(() => GuestWhereUniqueInput, { nullable: false })
    where!: GuestWhereUniqueInput
}
