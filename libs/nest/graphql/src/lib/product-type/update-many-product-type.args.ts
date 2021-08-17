import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductTypeUpdateManyMutationInput } from './product-type-update-many-mutation.input'
import { ProductTypeWhereInput } from './product-type-where.input'

@ArgsType()
export class UpdateManyProductTypeArgs {
    @Field(() => ProductTypeUpdateManyMutationInput, { nullable: false })
    data!: ProductTypeUpdateManyMutationInput

    @Field(() => ProductTypeWhereInput, { nullable: true })
    where?: ProductTypeWhereInput
}
