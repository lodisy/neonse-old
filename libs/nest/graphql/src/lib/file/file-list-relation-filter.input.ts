import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileWhereInput } from './file-where.input'

@InputType()
export class FileListRelationFilter {
    @Field(() => FileWhereInput, { nullable: true })
    every?: FileWhereInput

    @Field(() => FileWhereInput, { nullable: true })
    some?: FileWhereInput

    @Field(() => FileWhereInput, { nullable: true })
    none?: FileWhereInput
}
