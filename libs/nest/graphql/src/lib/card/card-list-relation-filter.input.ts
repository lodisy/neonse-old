import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CardWhereInput } from './card-where.input'

@InputType()
export class CardListRelationFilter {
    @Field(() => CardWhereInput, { nullable: true })
    every?: CardWhereInput

    @Field(() => CardWhereInput, { nullable: true })
    some?: CardWhereInput

    @Field(() => CardWhereInput, { nullable: true })
    none?: CardWhereInput
}
