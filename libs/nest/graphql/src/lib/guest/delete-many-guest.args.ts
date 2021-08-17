import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { GuestWhereInput } from './guest-where.input'

@ArgsType()
export class DeleteManyGuestArgs {
    @Field(() => GuestWhereInput, { nullable: true })
    where?: GuestWhereInput
}
