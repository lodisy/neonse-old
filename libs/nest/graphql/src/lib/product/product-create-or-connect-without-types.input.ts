import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { ProductCreateWithoutTypesInput } from './product-create-without-types.input'

@InputType()
export class ProductCreateOrConnectWithoutTypesInput {
    @Field(() => ProductWhereUniqueInput, { nullable: false })
    where!: ProductWhereUniqueInput

    @Field(() => ProductCreateWithoutTypesInput, { nullable: false })
    create!: ProductCreateWithoutTypesInput
}
