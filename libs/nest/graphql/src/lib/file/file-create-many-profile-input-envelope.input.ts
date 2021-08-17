import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileCreateManyProfileInput } from './file-create-many-profile.input'

@InputType()
export class FileCreateManyProfileInputEnvelope {
    @Field(() => [FileCreateManyProfileInput], { nullable: false })
    data!: Array<FileCreateManyProfileInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
