import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductCategoryCreateManyInput } from './product-category-create-many.input'

@ArgsType()
export class CreateManyProductCategoryArgs {
    @Field(() => [ProductCategoryCreateManyInput], { nullable: false })
    data!: Array<ProductCategoryCreateManyInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
