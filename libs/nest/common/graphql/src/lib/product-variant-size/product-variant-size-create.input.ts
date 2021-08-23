import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateNestedOneWithoutSizeInput } from '../product-variant/product-variant-create-nested-one-without-size.input';

@InputType()
export class ProductVariantSizeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductVariantCreateNestedOneWithoutSizeInput, {nullable:true})
    productVariant?: ProductVariantCreateNestedOneWithoutSizeInput;
}
