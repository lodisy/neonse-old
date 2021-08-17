import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CardCreateInput } from './card-create.input'

@ArgsType()
export class CreateOneCardArgs {
    @Field(() => CardCreateInput, { nullable: false })
    data!: CardCreateInput
}
