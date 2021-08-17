import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LocaleUpdateManyMutationInput } from './locale-update-many-mutation.input'
import { LocaleWhereInput } from './locale-where.input'

@ArgsType()
export class UpdateManyLocaleArgs {
    @Field(() => LocaleUpdateManyMutationInput, { nullable: false })
    data!: LocaleUpdateManyMutationInput

    @Field(() => LocaleWhereInput, { nullable: true })
    where?: LocaleWhereInput
}
