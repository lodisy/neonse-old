import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { ProfileCreateNestedOneWithoutReviewsInput } from '../profile/profile-create-nested-one-without-reviews.input'
import { ProductCreateNestedOneWithoutReviewsInput } from '../product/product-create-nested-one-without-reviews.input'
import { FileCreateNestedManyWithoutReviewInput } from '../file/file-create-nested-many-without-review.input'

@InputType()
export class ReviewCreateInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => Int, { nullable: false })
    @Validator.IsInt()
    @Validator.Min(1)
    @Validator.Max(5)
    rate!: number

    @Field(() => String, { nullable: true })
    description?: string

    @Field(() => ProfileCreateNestedOneWithoutReviewsInput, { nullable: false })
    by!: ProfileCreateNestedOneWithoutReviewsInput

    @Field(() => ProductCreateNestedOneWithoutReviewsInput, { nullable: false })
    for!: ProductCreateNestedOneWithoutReviewsInput

    @Field(() => FileCreateNestedManyWithoutReviewInput, { nullable: true })
    media?: FileCreateNestedManyWithoutReviewInput
}
