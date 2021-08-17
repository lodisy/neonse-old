import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SourceCreateManyInput } from './source-create-many.input'

@ArgsType()
export class CreateManySourceArgs {
    @Field(() => [SourceCreateManyInput], { nullable: false })
    data!: Array<SourceCreateManyInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
