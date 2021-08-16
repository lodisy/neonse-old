import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryCreateWithoutProductsInput } from './product-category-create-without-products.input';

@InputType()
export class ProductCategoryCreateOrConnectWithoutProductsInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    where!: ProductCategoryWhereUniqueInput;

    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:false})
    create!: ProductCategoryCreateWithoutProductsInput;
}
