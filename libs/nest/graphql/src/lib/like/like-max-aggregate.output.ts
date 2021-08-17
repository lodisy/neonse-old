import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ContentType } from '../prisma/content-type.enum'

@ObjectType()
export class LikeMaxAggregate {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    profileId?: string

    @Field(() => ContentType, { nullable: true })
    type?: keyof typeof ContentType

    @Field(() => String, { nullable: true })
    productId?: string

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string
}
