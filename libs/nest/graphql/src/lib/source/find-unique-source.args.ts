import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SourceWhereUniqueInput } from './source-where-unique.input'

@ArgsType()
export class FindUniqueSourceArgs {
    @Field(() => SourceWhereUniqueInput, { nullable: false })
    where!: SourceWhereUniqueInput
}
