import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LocaleWhereUniqueInput } from './locale-where-unique.input'
import { LocaleCreateInput } from './locale-create.input'
import { LocaleUpdateInput } from './locale-update.input'

@ArgsType()
export class UpsertOneLocaleArgs {
    @Field(() => LocaleWhereUniqueInput, { nullable: false })
    where!: LocaleWhereUniqueInput

    @Field(() => LocaleCreateInput, { nullable: false })
    create!: LocaleCreateInput

    @Field(() => LocaleUpdateInput, { nullable: false })
    update!: LocaleUpdateInput
}
