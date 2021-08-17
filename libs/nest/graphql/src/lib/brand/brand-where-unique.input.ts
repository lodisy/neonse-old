import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class BrandWhereUniqueInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    slug?: string
}
