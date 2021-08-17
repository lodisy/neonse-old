import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { FileWhereInput } from './file-where.input'
import { FileOrderByInput } from './file-order-by.input'
import { FileWhereUniqueInput } from './file-where-unique.input'
import { Int } from '@nestjs/graphql'
import { FileScalarFieldEnum } from './file-scalar-field.enum'

@ArgsType()
export class FindManyFileArgs {
    @Field(() => FileWhereInput, { nullable: true })
    where?: FileWhereInput

    @Field(() => [FileOrderByInput], { nullable: true })
    orderBy?: Array<FileOrderByInput>

    @Field(() => FileWhereUniqueInput, { nullable: true })
    cursor?: FileWhereUniqueInput

    @Field(() => Int, { nullable: true })
    take?: number

    @Field(() => Int, { nullable: true })
    skip?: number

    @Field(() => [FileScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof FileScalarFieldEnum>
}
