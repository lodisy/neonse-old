import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductUpdateWithoutReviewsInput } from './product-update-without-reviews.input'
import { ProductCreateWithoutReviewsInput } from './product-create-without-reviews.input'

@InputType()
export class ProductUpsertWithoutReviewsInput {
    @Field(() => ProductUpdateWithoutReviewsInput, { nullable: false })
    update!: ProductUpdateWithoutReviewsInput

    @Field(() => ProductCreateWithoutReviewsInput, { nullable: false })
    create!: ProductCreateWithoutReviewsInput
}
