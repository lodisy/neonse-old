import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CardMinAggregate {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    profileId?: string

    @Field(() => String, { nullable: true })
    number?: bigint | number

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => Date, { nullable: true })
    expiration?: Date | string

    @Field(() => String, { nullable: true })
    bank?: string
}
