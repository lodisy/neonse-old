import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CardWhereInput } from './card-where.input'

@ArgsType()
export class DeleteManyCardArgs {
    @Field(() => CardWhereInput, { nullable: true })
    where?: CardWhereInput
}
