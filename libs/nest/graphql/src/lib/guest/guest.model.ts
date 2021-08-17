import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Guest {
    @Field(() => String, { nullable: false })
    identifierToken!: string
    @Field(() => String, { nullable: true })
    email!: string | null
}
