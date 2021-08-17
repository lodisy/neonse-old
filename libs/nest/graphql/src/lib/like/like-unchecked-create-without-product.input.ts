import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ContentType } from '../prisma/content-type.enum'

@InputType()
export class LikeUncheckedCreateWithoutProductInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    profileId!: string

    @Field(() => ContentType, { nullable: false })
    type!: keyof typeof ContentType

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string
}
