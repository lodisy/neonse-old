import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileCreateWithoutReviewInput } from './file-create-without-review.input'
import { FileCreateOrConnectWithoutReviewInput } from './file-create-or-connect-without-review.input'
import { FileUpsertWithWhereUniqueWithoutReviewInput } from './file-upsert-with-where-unique-without-review.input'
import { FileCreateManyReviewInputEnvelope } from './file-create-many-review-input-envelope.input'
import { FileWhereUniqueInput } from './file-where-unique.input'
import { FileUpdateWithWhereUniqueWithoutReviewInput } from './file-update-with-where-unique-without-review.input'
import { FileUpdateManyWithWhereWithoutReviewInput } from './file-update-many-with-where-without-review.input'
import { FileScalarWhereInput } from './file-scalar-where.input'

@InputType()
export class FileUpdateManyWithoutReviewInput {
    @Field(() => [FileCreateWithoutReviewInput], { nullable: true })
    create?: Array<FileCreateWithoutReviewInput>

    @Field(() => [FileCreateOrConnectWithoutReviewInput], { nullable: true })
    connectOrCreate?: Array<FileCreateOrConnectWithoutReviewInput>

    @Field(() => [FileUpsertWithWhereUniqueWithoutReviewInput], { nullable: true })
    upsert?: Array<FileUpsertWithWhereUniqueWithoutReviewInput>

    @Field(() => FileCreateManyReviewInputEnvelope, { nullable: true })
    createMany?: FileCreateManyReviewInputEnvelope

    @Field(() => [FileWhereUniqueInput], { nullable: true })
    connect?: Array<FileWhereUniqueInput>

    @Field(() => [FileWhereUniqueInput], { nullable: true })
    set?: Array<FileWhereUniqueInput>

    @Field(() => [FileWhereUniqueInput], { nullable: true })
    disconnect?: Array<FileWhereUniqueInput>

    @Field(() => [FileWhereUniqueInput], { nullable: true })
    delete?: Array<FileWhereUniqueInput>

    @Field(() => [FileUpdateWithWhereUniqueWithoutReviewInput], { nullable: true })
    update?: Array<FileUpdateWithWhereUniqueWithoutReviewInput>

    @Field(() => [FileUpdateManyWithWhereWithoutReviewInput], { nullable: true })
    updateMany?: Array<FileUpdateManyWithWhereWithoutReviewInput>

    @Field(() => [FileScalarWhereInput], { nullable: true })
    deleteMany?: Array<FileScalarWhereInput>
}
