import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateWithoutProductsInput } from './product-category-update-without-products.input';

@InputType()
export class ProductCategoryUpdateWithWhereUniqueWithoutProductsInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    where!: ProductCategoryWhereUniqueInput;

    @Field(() => ProductCategoryUpdateWithoutProductsInput, {nullable:false})
    data!: ProductCategoryUpdateWithoutProductsInput;
}
