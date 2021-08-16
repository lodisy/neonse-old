import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateNestedOneWithoutChildrenInput } from './product-category-create-nested-one-without-children.input';
import { ProductCategoryCreateNestedManyWithoutParentInput } from './product-category-create-nested-many-without-parent.input';
import { ProductCreateNestedManyWithoutCategoriesInput } from '../product/product-create-nested-many-without-categories.input';

@InputType()
export class ProductCategoryCreateWithoutTypesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => ProductCategoryCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: ProductCategoryCreateNestedOneWithoutChildrenInput;

    @Field(() => ProductCategoryCreateNestedManyWithoutParentInput, {nullable:true})
    children?: ProductCategoryCreateNestedManyWithoutParentInput;

    @Field(() => ProductCreateNestedManyWithoutCategoriesInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutCategoriesInput;
}
