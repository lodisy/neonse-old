import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { ProductCreateWithoutVariantsInput } from './product-create-without-variants.input'

@InputType()
export class ProductCreateOrConnectWithoutVariantsInput {
    @Field(() => ProductWhereUniqueInput, { nullable: false })
    where!: ProductWhereUniqueInput

    @Field(() => ProductCreateWithoutVariantsInput, { nullable: false })
    create!: ProductCreateWithoutVariantsInput
}
