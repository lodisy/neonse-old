import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCreateNestedManyWithoutTypesInput } from '../product/product-create-nested-many-without-types.input'

@InputType()
export class ProductTypeCreateWithoutCategoriesInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    slug!: string

    @Field(() => ProductCreateNestedManyWithoutTypesInput, { nullable: true })
    products?: ProductCreateNestedManyWithoutTypesInput
}
