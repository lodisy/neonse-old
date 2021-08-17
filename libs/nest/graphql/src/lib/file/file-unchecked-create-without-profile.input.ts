import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileType } from '../prisma/file-type.enum'
import { Int } from '@nestjs/graphql'
import { SourceUncheckedCreateNestedOneWithoutFileInput } from '../source/source-unchecked-create-nested-one-without-file.input'

@InputType()
export class FileUncheckedCreateWithoutProfileInput {
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

    @Field(() => String, { nullable: true })
    profileAvatarId?: string

    @Field(() => String, { nullable: true })
    reviewId?: string

    @Field(() => SourceUncheckedCreateNestedOneWithoutFileInput, { nullable: true })
    source?: SourceUncheckedCreateNestedOneWithoutFileInput
}
