import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductUpdateWithoutLikesInput } from './product-update-without-likes.input'
import { ProductCreateWithoutLikesInput } from './product-create-without-likes.input'

@InputType()
export class ProductUpsertWithoutLikesInput {
    @Field(() => ProductUpdateWithoutLikesInput, { nullable: false })
    update!: ProductUpdateWithoutLikesInput

    @Field(() => ProductCreateWithoutLikesInput, { nullable: false })
    create!: ProductCreateWithoutLikesInput
}
