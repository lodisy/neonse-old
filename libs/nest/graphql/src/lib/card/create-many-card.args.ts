import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CardCreateManyInput } from './card-create-many.input'

@ArgsType()
export class CreateManyCardArgs {
    @Field(() => [CardCreateManyInput], { nullable: false })
    data!: Array<CardCreateManyInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
