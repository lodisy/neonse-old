import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutProductsInput } from './product-category-create-without-products.input';
import { ProductCategoryCreateOrConnectWithoutProductsInput } from './product-category-create-or-connect-without-products.input';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryCreateNestedManyWithoutProductsInput {

    @Field(() => [ProductCategoryCreateWithoutProductsInput], {nullable:true})
    create?: Array<ProductCategoryCreateWithoutProductsInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutProductsInput>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    connect?: Array<ProductCategoryWhereUniqueInput>;
}
