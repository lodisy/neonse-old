import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ItemWhereInput } from './item-where.input'
import { ItemOrderByInput } from './item-order-by.input'
import { ItemWhereUniqueInput } from './item-where-unique.input'
import { Int } from '@nestjs/graphql'
import { ItemScalarFieldEnum } from './item-scalar-field.enum'

@ArgsType()
export class FindFirstItemArgs {
    @Field(() => ItemWhereInput, { nullable: true })
    where?: ItemWhereInput

    @Field(() => [ItemOrderByInput], { nullable: true })
    orderBy?: Array<ItemOrderByInput>

    @Field(() => ItemWhereUniqueInput, { nullable: true })
    cursor?: ItemWhereUniqueInput

    @Field(() => Int, { nullable: true })
    take?: number

    @Field(() => Int, { nullable: true })
    skip?: number

    @Field(() => [ItemScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof ItemScalarFieldEnum>
}
