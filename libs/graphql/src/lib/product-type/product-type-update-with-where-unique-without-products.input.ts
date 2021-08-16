import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input';
import { ProductTypeUpdateWithoutProductsInput } from './product-type-update-without-products.input';

@InputType()
export class ProductTypeUpdateWithWhereUniqueWithoutProductsInput {

    @Field(() => ProductTypeWhereUniqueInput, {nullable:false})
    where!: ProductTypeWhereUniqueInput;

    @Field(() => ProductTypeUpdateWithoutProductsInput, {nullable:false})
    data!: ProductTypeUpdateWithoutProductsInput;
}
