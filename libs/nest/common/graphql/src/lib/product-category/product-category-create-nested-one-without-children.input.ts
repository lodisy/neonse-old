import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutChildrenInput } from './product-category-create-without-children.input';
import { ProductCategoryCreateOrConnectWithoutChildrenInput } from './product-category-create-or-connect-without-children.input';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryCreateNestedOneWithoutChildrenInput {

    @Field(() => ProductCategoryCreateWithoutChildrenInput, {nullable:true})
    create?: ProductCategoryCreateWithoutChildrenInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutChildrenInput, {nullable:true})
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutChildrenInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    connect?: ProductCategoryWhereUniqueInput;
}
