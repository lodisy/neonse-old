import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'

@InputType()
export class OrderDetailWhereInput {
    @Field(() => [OrderDetailWhereInput], { nullable: true })
    AND?: Array<OrderDetailWhereInput>

    @Field(() => [OrderDetailWhereInput], { nullable: true })
    OR?: Array<OrderDetailWhereInput>

    @Field(() => [OrderDetailWhereInput], { nullable: true })
    NOT?: Array<OrderDetailWhereInput>

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter
}
