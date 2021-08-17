import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OrderWhereUniqueInput } from './order-where-unique.input'

@ArgsType()
export class FindUniqueOrderArgs {
    @Field(() => OrderWhereUniqueInput, { nullable: false })
    where!: OrderWhereUniqueInput
}
