import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BrandWhereUniqueInput } from './brand-where-unique.input'

@ArgsType()
export class DeleteOneBrandArgs {
    @Field(() => BrandWhereUniqueInput, { nullable: false })
    where!: BrandWhereUniqueInput
}
