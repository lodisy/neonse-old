import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { ProductVariantCreateWithoutStyleInput } from './product-variant-create-without-style.input';

@InputType()
export class ProductVariantCreateOrConnectWithoutStyleInput {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    where!: ProductVariantWhereUniqueInput;

    @Field(() => ProductVariantCreateWithoutStyleInput, {nullable:false})
    create!: ProductVariantCreateWithoutStyleInput;
}
