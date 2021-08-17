import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AddressWhereInput } from './address-where.input'

@InputType()
export class AddressListRelationFilter {
    @Field(() => AddressWhereInput, { nullable: true })
    every?: AddressWhereInput

    @Field(() => AddressWhereInput, { nullable: true })
    some?: AddressWhereInput

    @Field(() => AddressWhereInput, { nullable: true })
    none?: AddressWhereInput
}
