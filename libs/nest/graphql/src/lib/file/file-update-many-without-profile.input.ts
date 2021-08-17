import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileCreateWithoutProfileInput } from './file-create-without-profile.input'
import { FileCreateOrConnectWithoutProfileInput } from './file-create-or-connect-without-profile.input'
import { FileUpsertWithWhereUniqueWithoutProfileInput } from './file-upsert-with-where-unique-without-profile.input'
import { FileCreateManyProfileInputEnvelope } from './file-create-many-profile-input-envelope.input'
import { FileWhereUniqueInput } from './file-where-unique.input'
import { FileUpdateWithWhereUniqueWithoutProfileInput } from './file-update-with-where-unique-without-profile.input'
import { FileUpdateManyWithWhereWithoutProfileInput } from './file-update-many-with-where-without-profile.input'
import { FileScalarWhereInput } from './file-scalar-where.input'

@InputType()
export class FileUpdateManyWithoutProfileInput {
    @Field(() => [FileCreateWithoutProfileInput], { nullable: true })
    create?: Array<FileCreateWithoutProfileInput>

    @Field(() => [FileCreateOrConnectWithoutProfileInput], { nullable: true })
    connectOrCreate?: Array<FileCreateOrConnectWithoutProfileInput>

    @Field(() => [FileUpsertWithWhereUniqueWithoutProfileInput], { nullable: true })
    upsert?: Array<FileUpsertWithWhereUniqueWithoutProfileInput>

    @Field(() => FileCreateManyProfileInputEnvelope, { nullable: true })
    createMany?: FileCreateManyProfileInputEnvelope

    @Field(() => [FileWhereUniqueInput], { nullable: true })
    connect?: Array<FileWhereUniqueInput>

    @Field(() => [FileWhereUniqueInput], { nullable: true })
    set?: Array<FileWhereUniqueInput>

    @Field(() => [FileWhereUniqueInput], { nullable: true })
    disconnect?: Array<FileWhereUniqueInput>

    @Field(() => [FileWhereUniqueInput], { nullable: true })
    delete?: Array<FileWhereUniqueInput>

    @Field(() => [FileUpdateWithWhereUniqueWithoutProfileInput], { nullable: true })
    update?: Array<FileUpdateWithWhereUniqueWithoutProfileInput>

    @Field(() => [FileUpdateManyWithWhereWithoutProfileInput], { nullable: true })
    updateMany?: Array<FileUpdateManyWithWhereWithoutProfileInput>

    @Field(() => [FileScalarWhereInput], { nullable: true })
    deleteMany?: Array<FileScalarWhereInput>
}
