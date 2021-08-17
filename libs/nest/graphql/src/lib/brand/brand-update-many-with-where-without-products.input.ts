import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BrandScalarWhereInput } from './brand-scalar-where.input'
import { BrandUpdateManyMutationInput } from './brand-update-many-mutation.input'

@InputType()
export class BrandUpdateManyWithWhereWithoutProductsInput {
    @Field(() => BrandScalarWhereInput, { nullable: false })
    where!: BrandScalarWhereInput

    @Field(() => BrandUpdateManyMutationInput, { nullable: false })
    data!: BrandUpdateManyMutationInput
}
