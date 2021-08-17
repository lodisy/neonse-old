import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SourceCreateWithoutFileInput } from './source-create-without-file.input'
import { SourceCreateOrConnectWithoutFileInput } from './source-create-or-connect-without-file.input'
import { SourceWhereUniqueInput } from './source-where-unique.input'

@InputType()
export class SourceUncheckedCreateNestedOneWithoutFileInput {
    @Field(() => SourceCreateWithoutFileInput, { nullable: true })
    create?: SourceCreateWithoutFileInput

    @Field(() => SourceCreateOrConnectWithoutFileInput, { nullable: true })
    connectOrCreate?: SourceCreateOrConnectWithoutFileInput

    @Field(() => SourceWhereUniqueInput, { nullable: true })
    connect?: SourceWhereUniqueInput
}
