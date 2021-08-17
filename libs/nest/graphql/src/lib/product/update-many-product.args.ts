import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductUpdateManyMutationInput } from './product-update-many-mutation.input'
import { ProductWhereInput } from './product-where.input'

@ArgsType()
export class UpdateManyProductArgs {
    @Field(() => ProductUpdateManyMutationInput, { nullable: false })
    data!: ProductUpdateManyMutationInput

    @Field(() => ProductWhereInput, { nullable: true })
    where?: ProductWhereInput
}
