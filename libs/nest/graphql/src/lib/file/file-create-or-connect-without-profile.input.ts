import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileWhereUniqueInput } from './file-where-unique.input'
import { FileCreateWithoutProfileInput } from './file-create-without-profile.input'

@InputType()
export class FileCreateOrConnectWithoutProfileInput {
    @Field(() => FileWhereUniqueInput, { nullable: false })
    where!: FileWhereUniqueInput

    @Field(() => FileCreateWithoutProfileInput, { nullable: false })
    create!: FileCreateWithoutProfileInput
}
