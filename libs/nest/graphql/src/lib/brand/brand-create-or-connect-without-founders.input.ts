import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BrandWhereUniqueInput } from './brand-where-unique.input'
import { BrandCreateWithoutFoundersInput } from './brand-create-without-founders.input'

@InputType()
export class BrandCreateOrConnectWithoutFoundersInput {
    @Field(() => BrandWhereUniqueInput, { nullable: false })
    where!: BrandWhereUniqueInput

    @Field(() => BrandCreateWithoutFoundersInput, { nullable: false })
    create!: BrandCreateWithoutFoundersInput
}
