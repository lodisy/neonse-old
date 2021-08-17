import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SourceWhereInput } from './source-where.input'
import { SourceOrderByInput } from './source-order-by.input'
import { SourceWhereUniqueInput } from './source-where-unique.input'
import { Int } from '@nestjs/graphql'
import { SourceScalarFieldEnum } from './source-scalar-field.enum'

@ArgsType()
export class FindManySourceArgs {
    @Field(() => SourceWhereInput, { nullable: true })
    where?: SourceWhereInput

    @Field(() => [SourceOrderByInput], { nullable: true })
    orderBy?: Array<SourceOrderByInput>

    @Field(() => SourceWhereUniqueInput, { nullable: true })
    cursor?: SourceWhereUniqueInput

    @Field(() => Int, { nullable: true })
    take?: number

    @Field(() => Int, { nullable: true })
    skip?: number

    @Field(() => [SourceScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof SourceScalarFieldEnum>
}
