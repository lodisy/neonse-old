import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductTypeCreateManyInput } from './product-type-create-many.input'

@ArgsType()
export class CreateManyProductTypeArgs {
    @Field(() => [ProductTypeCreateManyInput], { nullable: false })
    data!: Array<ProductTypeCreateManyInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
