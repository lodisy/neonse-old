import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LocaleWhereInput } from './locale-where.input'
import { LocaleOrderByInput } from './locale-order-by.input'
import { LocaleWhereUniqueInput } from './locale-where-unique.input'
import { Int } from '@nestjs/graphql'
import { LocaleScalarFieldEnum } from './locale-scalar-field.enum'

@ArgsType()
export class FindManyLocaleArgs {
    @Field(() => LocaleWhereInput, { nullable: true })
    where?: LocaleWhereInput

    @Field(() => [LocaleOrderByInput], { nullable: true })
    orderBy?: Array<LocaleOrderByInput>

    @Field(() => LocaleWhereUniqueInput, { nullable: true })
    cursor?: LocaleWhereUniqueInput

    @Field(() => Int, { nullable: true })
    take?: number

    @Field(() => Int, { nullable: true })
    skip?: number

    @Field(() => [LocaleScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof LocaleScalarFieldEnum>
}
