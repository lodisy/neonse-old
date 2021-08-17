import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SourceCreateInput } from './source-create.input'

@ArgsType()
export class CreateOneSourceArgs {
    @Field(() => SourceCreateInput, { nullable: false })
    data!: SourceCreateInput
}
