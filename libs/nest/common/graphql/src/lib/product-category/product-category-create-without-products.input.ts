import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductCategoryCreateNestedOneWithoutChildrenInput } from './product-category-create-nested-one-without-children.input';
import { ProductCategoryCreateNestedManyWithoutParentInput } from './product-category-create-nested-many-without-parent.input';
import { ProductTypeCreateNestedManyWithoutCategoriesInput } from '../product-type/product-type-create-nested-many-without-categories.input';
import { ProductCategoryTranslationCreateNestedManyWithoutProductCategoryInput } from '../product-category-translation/product-category-translation-create-nested-many-without-product-category.input';

@InputType()
export class ProductCategoryCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => ProductCategoryCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: ProductCategoryCreateNestedOneWithoutChildrenInput;

    @Field(() => ProductCategoryCreateNestedManyWithoutParentInput, {nullable:true})
    children?: ProductCategoryCreateNestedManyWithoutParentInput;

    @Field(() => ProductTypeCreateNestedManyWithoutCategoriesInput, {nullable:true})
    types?: ProductTypeCreateNestedManyWithoutCategoriesInput;

    @Field(() => ProductCategoryTranslationCreateNestedManyWithoutProductCategoryInput, {nullable:true})
    translations?: ProductCategoryTranslationCreateNestedManyWithoutProductCategoryInput;
}
