import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@InputType()
export class ItemCreateInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => Int, { nullable: false })
    quantity!: number
}
