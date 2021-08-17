import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ItemCreateManyInput } from './item-create-many.input'

@ArgsType()
export class CreateManyItemArgs {
    @Field(() => [ItemCreateManyInput], { nullable: false })
    data!: Array<ItemCreateManyInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
