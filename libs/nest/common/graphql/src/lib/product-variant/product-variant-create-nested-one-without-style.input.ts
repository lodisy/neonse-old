import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateWithoutStyleInput } from './product-variant-create-without-style.input';
import { ProductVariantCreateOrConnectWithoutStyleInput } from './product-variant-create-or-connect-without-style.input';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@InputType()
export class ProductVariantCreateNestedOneWithoutStyleInput {

    @Field(() => ProductVariantCreateWithoutStyleInput, {nullable:true})
    create?: ProductVariantCreateWithoutStyleInput;

    @Field(() => ProductVariantCreateOrConnectWithoutStyleInput, {nullable:true})
    connectOrCreate?: ProductVariantCreateOrConnectWithoutStyleInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    connect?: ProductVariantWhereUniqueInput;
}
