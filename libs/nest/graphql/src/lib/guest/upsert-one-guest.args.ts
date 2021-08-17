import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { GuestWhereUniqueInput } from './guest-where-unique.input'
import { GuestCreateInput } from './guest-create.input'
import { GuestUpdateInput } from './guest-update.input'

@ArgsType()
export class UpsertOneGuestArgs {
    @Field(() => GuestWhereUniqueInput, { nullable: false })
    where!: GuestWhereUniqueInput

    @Field(() => GuestCreateInput, { nullable: false })
    create!: GuestCreateInput

    @Field(() => GuestUpdateInput, { nullable: false })
    update!: GuestUpdateInput
}
