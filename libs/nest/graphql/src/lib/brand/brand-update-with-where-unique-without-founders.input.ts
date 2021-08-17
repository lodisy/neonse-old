import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BrandWhereUniqueInput } from './brand-where-unique.input'
import { BrandUpdateWithoutFoundersInput } from './brand-update-without-founders.input'

@InputType()
export class BrandUpdateWithWhereUniqueWithoutFoundersInput {
    @Field(() => BrandWhereUniqueInput, { nullable: false })
    where!: BrandWhereUniqueInput

    @Field(() => BrandUpdateWithoutFoundersInput, { nullable: false })
    data!: BrandUpdateWithoutFoundersInput
}
