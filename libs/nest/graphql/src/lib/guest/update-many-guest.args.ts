import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { GuestUpdateManyMutationInput } from './guest-update-many-mutation.input'
import { GuestWhereInput } from './guest-where.input'

@ArgsType()
export class UpdateManyGuestArgs {
    @Field(() => GuestUpdateManyMutationInput, { nullable: false })
    data!: GuestUpdateManyMutationInput

    @Field(() => GuestWhereInput, { nullable: true })
    where?: GuestWhereInput
}
