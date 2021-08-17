import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { ProductCreateimagesInput } from '../prisma/product-createimages.input'
import { ReviewUncheckedCreateNestedManyWithoutForInput } from '../review/review-unchecked-create-nested-many-without-for.input'
import { LikeUncheckedCreateNestedManyWithoutProductInput } from '../like/like-unchecked-create-nested-many-without-product.input'

@InputType()
export class ProductUncheckedCreateWithoutVariantsInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    sku!: string

    @Field(() => String, { nullable: false })
    discription!: string

    @Field(() => Int, { nullable: false })
    price!: number

    @Field(() => Boolean, { nullable: true })
    featured?: boolean

    @Field(() => Boolean, { nullable: true })
    draft?: boolean

    @Field(() => Int, { nullable: false })
    stock!: number

    @Field(() => Int, { nullable: true })
    sold?: number

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string

    @Field(() => ProductCreateimagesInput, { nullable: true })
    images?: ProductCreateimagesInput

    @Field(() => ReviewUncheckedCreateNestedManyWithoutForInput, { nullable: true })
    reviews?: ReviewUncheckedCreateNestedManyWithoutForInput

    @Field(() => LikeUncheckedCreateNestedManyWithoutProductInput, { nullable: true })
    likes?: LikeUncheckedCreateNestedManyWithoutProductInput
}
