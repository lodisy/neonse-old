import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LocaleWhereUniqueInput } from './locale-where-unique.input'

@ArgsType()
export class FindUniqueLocaleArgs {
    @Field(() => LocaleWhereUniqueInput, { nullable: false })
    where!: LocaleWhereUniqueInput
}
