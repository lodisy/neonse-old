import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LocaleUpdateInput } from './locale-update.input'
import { LocaleWhereUniqueInput } from './locale-where-unique.input'

@ArgsType()
export class UpdateOneLocaleArgs {
    @Field(() => LocaleUpdateInput, { nullable: false })
    data!: LocaleUpdateInput

    @Field(() => LocaleWhereUniqueInput, { nullable: false })
    where!: LocaleWhereUniqueInput
}
