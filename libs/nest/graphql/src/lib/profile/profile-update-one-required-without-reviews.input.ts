import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProfileCreateWithoutReviewsInput } from './profile-create-without-reviews.input'
import { ProfileCreateOrConnectWithoutReviewsInput } from './profile-create-or-connect-without-reviews.input'
import { ProfileUpsertWithoutReviewsInput } from './profile-upsert-without-reviews.input'
import { ProfileWhereUniqueInput } from './profile-where-unique.input'
import { ProfileUpdateWithoutReviewsInput } from './profile-update-without-reviews.input'

@InputType()
export class ProfileUpdateOneRequiredWithoutReviewsInput {
    @Field(() => ProfileCreateWithoutReviewsInput, { nullable: true })
    create?: ProfileCreateWithoutReviewsInput

    @Field(() => ProfileCreateOrConnectWithoutReviewsInput, { nullable: true })
    connectOrCreate?: ProfileCreateOrConnectWithoutReviewsInput

    @Field(() => ProfileUpsertWithoutReviewsInput, { nullable: true })
    upsert?: ProfileUpsertWithoutReviewsInput

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    connect?: ProfileWhereUniqueInput

    @Field(() => ProfileUpdateWithoutReviewsInput, { nullable: true })
    update?: ProfileUpdateWithoutReviewsInput
}
