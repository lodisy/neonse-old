import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SourceUpdateManyMutationInput } from './source-update-many-mutation.input'
import { SourceWhereInput } from './source-where.input'

@ArgsType()
export class UpdateManySourceArgs {
    @Field(() => SourceUpdateManyMutationInput, { nullable: false })
    data!: SourceUpdateManyMutationInput

    @Field(() => SourceWhereInput, { nullable: true })
    where?: SourceWhereInput
}
