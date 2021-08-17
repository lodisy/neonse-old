import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCreateWithoutReviewsInput } from './product-create-without-reviews.input'
import { ProductCreateOrConnectWithoutReviewsInput } from './product-create-or-connect-without-reviews.input'
import { ProductWhereUniqueInput } from './product-where-unique.input'

@InputType()
export class ProductCreateNestedOneWithoutReviewsInput {
    @Field(() => ProductCreateWithoutReviewsInput, { nullable: true })
    create?: ProductCreateWithoutReviewsInput

    @Field(() => ProductCreateOrConnectWithoutReviewsInput, { nullable: true })
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput

    @Field(() => ProductWhereUniqueInput, { nullable: true })
    connect?: ProductWhereUniqueInput
}
