import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileType } from '../prisma/file-type.enum'
import { Int } from '@nestjs/graphql'
import { SourceCreateNestedOneWithoutFileInput } from '../source/source-create-nested-one-without-file.input'
import { ProfileCreateNestedOneWithoutUploadsInput } from '../profile/profile-create-nested-one-without-uploads.input'
import { ProfileCreateNestedOneWithoutAvatarInput } from '../profile/profile-create-nested-one-without-avatar.input'

@InputType()
export class FileCreateWithoutReviewInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: true })
    alt?: string

    @Field(() => String, { nullable: true })
    title?: string

    @Field(() => String, { nullable: true })
    caption?: string

    @Field(() => FileType, { nullable: false })
    format!: keyof typeof FileType

    @Field(() => String, { nullable: false })
    size!: Buffer

    @Field(() => Int, { nullable: true })
    width?: number

    @Field(() => Int, { nullable: true })
    height?: number

    @Field(() => Boolean, { nullable: true })
    autoPlay?: boolean

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string

    @Field(() => SourceCreateNestedOneWithoutFileInput, { nullable: true })
    source?: SourceCreateNestedOneWithoutFileInput

    @Field(() => ProfileCreateNestedOneWithoutUploadsInput, { nullable: true })
    profile?: ProfileCreateNestedOneWithoutUploadsInput

    @Field(() => ProfileCreateNestedOneWithoutAvatarInput, { nullable: true })
    profileAvatar?: ProfileCreateNestedOneWithoutAvatarInput
}
