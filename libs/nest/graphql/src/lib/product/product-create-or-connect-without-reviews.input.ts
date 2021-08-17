import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { ProductCreateWithoutReviewsInput } from './product-create-without-reviews.input'

@InputType()
export class ProductCreateOrConnectWithoutReviewsInput {
    @Field(() => ProductWhereUniqueInput, { nullable: false })
    where!: ProductWhereUniqueInput

    @Field(() => ProductCreateWithoutReviewsInput, { nullable: false })
    create!: ProductCreateWithoutReviewsInput
}
