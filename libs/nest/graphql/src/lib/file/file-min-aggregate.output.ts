import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { FileType } from '../prisma/file-type.enum'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class FileMinAggregate {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    alt?: string

    @Field(() => String, { nullable: true })
    title?: string

    @Field(() => String, { nullable: true })
    caption?: string

    @Field(() => FileType, { nullable: true })
    format?: keyof typeof FileType

    @Field(() => String, { nullable: true })
    size?: Buffer

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
    profileId?: string

    @Field(() => String, { nullable: true })
    profileAvatarId?: string

    @Field(() => String, { nullable: true })
    reviewId?: string
}
