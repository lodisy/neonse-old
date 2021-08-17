import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OrderCreateManyInput } from './order-create-many.input'

@ArgsType()
export class CreateManyOrderArgs {
    @Field(() => [OrderCreateManyInput], { nullable: false })
    data!: Array<OrderCreateManyInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
