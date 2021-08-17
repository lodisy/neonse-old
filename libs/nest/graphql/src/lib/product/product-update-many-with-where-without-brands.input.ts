import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductScalarWhereInput } from './product-scalar-where.input'
import { ProductUpdateManyMutationInput } from './product-update-many-mutation.input'

@InputType()
export class ProductUpdateManyWithWhereWithoutBrandsInput {
    @Field(() => ProductScalarWhereInput, { nullable: false })
    where!: ProductScalarWhereInput

    @Field(() => ProductUpdateManyMutationInput, { nullable: false })
    data!: ProductUpdateManyMutationInput
}
