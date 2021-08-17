import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCreateWithoutVariantsInput } from './product-create-without-variants.input'
import { ProductCreateOrConnectWithoutVariantsInput } from './product-create-or-connect-without-variants.input'
import { ProductWhereUniqueInput } from './product-where-unique.input'

@InputType()
export class ProductCreateNestedOneWithoutVariantsInput {
    @Field(() => ProductCreateWithoutVariantsInput, { nullable: true })
    create?: ProductCreateWithoutVariantsInput

    @Field(() => ProductCreateOrConnectWithoutVariantsInput, { nullable: true })
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput

    @Field(() => ProductWhereUniqueInput, { nullable: true })
    connect?: ProductWhereUniqueInput
}
