import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileWhereUniqueInput } from './file-where-unique.input'
import { FileUpdateWithoutProfileInput } from './file-update-without-profile.input'

@InputType()
export class FileUpdateWithWhereUniqueWithoutProfileInput {
    @Field(() => FileWhereUniqueInput, { nullable: false })
    where!: FileWhereUniqueInput

    @Field(() => FileUpdateWithoutProfileInput, { nullable: false })
    data!: FileUpdateWithoutProfileInput
}
