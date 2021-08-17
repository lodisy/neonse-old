import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BrandUpdateInput } from './brand-update.input'
import { BrandWhereUniqueInput } from './brand-where-unique.input'

@ArgsType()
export class UpdateOneBrandArgs {
    @Field(() => BrandUpdateInput, { nullable: false })
    data!: BrandUpdateInput

    @Field(() => BrandWhereUniqueInput, { nullable: false })
    where!: BrandWhereUniqueInput
}
