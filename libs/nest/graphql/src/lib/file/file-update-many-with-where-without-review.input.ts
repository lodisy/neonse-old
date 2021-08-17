import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileScalarWhereInput } from './file-scalar-where.input'
import { FileUpdateManyMutationInput } from './file-update-many-mutation.input'

@InputType()
export class FileUpdateManyWithWhereWithoutReviewInput {
    @Field(() => FileScalarWhereInput, { nullable: false })
    where!: FileScalarWhereInput

    @Field(() => FileUpdateManyMutationInput, { nullable: false })
    data!: FileUpdateManyMutationInput
}
