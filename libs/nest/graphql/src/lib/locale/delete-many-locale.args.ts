import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LocaleWhereInput } from './locale-where.input'

@ArgsType()
export class DeleteManyLocaleArgs {
    @Field(() => LocaleWhereInput, { nullable: true })
    where?: LocaleWhereInput
}
