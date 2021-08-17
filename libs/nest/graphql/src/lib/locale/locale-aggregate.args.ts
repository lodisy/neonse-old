import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LocaleWhereInput } from './locale-where.input'
import { LocaleOrderByInput } from './locale-order-by.input'
import { LocaleWhereUniqueInput } from './locale-where-unique.input'
import { Int } from '@nestjs/graphql'
import { LocaleCountAggregateInput } from './locale-count-aggregate.input'
import { LocaleMinAggregateInput } from './locale-min-aggregate.input'
import { LocaleMaxAggregateInput } from './locale-max-aggregate.input'

@ArgsType()
export class LocaleAggregateArgs {
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

    @Field(() => LocaleCountAggregateInput, { nullable: true })
    _count?: LocaleCountAggregateInput

    @Field(() => LocaleMinAggregateInput, { nullable: true })
    _min?: LocaleMinAggregateInput

    @Field(() => LocaleMaxAggregateInput, { nullable: true })
    _max?: LocaleMaxAggregateInput
}
