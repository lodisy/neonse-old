import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LocaleCreateManyInput } from './locale-create-many.input'

@ArgsType()
export class CreateManyLocaleArgs {
    @Field(() => [LocaleCreateManyInput], { nullable: false })
    data!: Array<LocaleCreateManyInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
