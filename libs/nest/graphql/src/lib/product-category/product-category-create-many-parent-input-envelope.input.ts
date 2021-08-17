import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryCreateManyParentInput } from './product-category-create-many-parent.input'

@InputType()
export class ProductCategoryCreateManyParentInputEnvelope {
    @Field(() => [ProductCategoryCreateManyParentInput], { nullable: false })
    data!: Array<ProductCategoryCreateManyParentInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
