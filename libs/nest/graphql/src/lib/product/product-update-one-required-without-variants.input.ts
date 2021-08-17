import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCreateWithoutVariantsInput } from './product-create-without-variants.input'
import { ProductCreateOrConnectWithoutVariantsInput } from './product-create-or-connect-without-variants.input'
import { ProductUpsertWithoutVariantsInput } from './product-upsert-without-variants.input'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { ProductUpdateWithoutVariantsInput } from './product-update-without-variants.input'

@InputType()
export class ProductUpdateOneRequiredWithoutVariantsInput {
    @Field(() => ProductCreateWithoutVariantsInput, { nullable: true })
    create?: ProductCreateWithoutVariantsInput

    @Field(() => ProductCreateOrConnectWithoutVariantsInput, { nullable: true })
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput

    @Field(() => ProductUpsertWithoutVariantsInput, { nullable: true })
    upsert?: ProductUpsertWithoutVariantsInput

    @Field(() => ProductWhereUniqueInput, { nullable: true })
    connect?: ProductWhereUniqueInput

    @Field(() => ProductUpdateWithoutVariantsInput, { nullable: true })
    update?: ProductUpdateWithoutVariantsInput
}
