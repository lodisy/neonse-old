import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateWithoutMediaInput } from './review-create-without-media.input'
import { ReviewCreateOrConnectWithoutMediaInput } from './review-create-or-connect-without-media.input'
import { ReviewUpsertWithoutMediaInput } from './review-upsert-without-media.input'
import { ReviewWhereUniqueInput } from './review-where-unique.input'
import { ReviewUpdateWithoutMediaInput } from './review-update-without-media.input'

@InputType()
export class ReviewUpdateOneWithoutMediaInput {
    @Field(() => ReviewCreateWithoutMediaInput, { nullable: true })
    create?: ReviewCreateWithoutMediaInput

    @Field(() => ReviewCreateOrConnectWithoutMediaInput, { nullable: true })
    connectOrCreate?: ReviewCreateOrConnectWithoutMediaInput

    @Field(() => ReviewUpsertWithoutMediaInput, { nullable: true })
    upsert?: ReviewUpsertWithoutMediaInput

    @Field(() => ReviewWhereUniqueInput, { nullable: true })
    connect?: ReviewWhereUniqueInput

    @Field(() => Boolean, { nullable: true })
    disconnect?: boolean

    @Field(() => Boolean, { nullable: true })
    delete?: boolean

    @Field(() => ReviewUpdateWithoutMediaInput, { nullable: true })
    update?: ReviewUpdateWithoutMediaInput
}
