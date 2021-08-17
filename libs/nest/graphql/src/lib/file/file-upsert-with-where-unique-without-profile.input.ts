import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileWhereUniqueInput } from './file-where-unique.input'
import { FileUpdateWithoutProfileInput } from './file-update-without-profile.input'
import { FileCreateWithoutProfileInput } from './file-create-without-profile.input'

@InputType()
export class FileUpsertWithWhereUniqueWithoutProfileInput {
    @Field(() => FileWhereUniqueInput, { nullable: false })
    where!: FileWhereUniqueInput

    @Field(() => FileUpdateWithoutProfileInput, { nullable: false })
    update!: FileUpdateWithoutProfileInput

    @Field(() => FileCreateWithoutProfileInput, { nullable: false })
    create!: FileCreateWithoutProfileInput
}
