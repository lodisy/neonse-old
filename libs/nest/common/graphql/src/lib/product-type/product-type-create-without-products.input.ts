import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductCategoryCreateNestedManyWithoutTypesInput } from '../product-category/product-category-create-nested-many-without-types.input';
import { ProductTypeTranslationCreateNestedManyWithoutProductTypeInput } from '../product-type-translation/product-type-translation-create-nested-many-without-product-type.input';

@InputType()
export class ProductTypeCreateWithoutProductsInput {

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

    @Field(() => ProductCategoryCreateNestedManyWithoutTypesInput, {nullable:true})
    categories?: ProductCategoryCreateNestedManyWithoutTypesInput;

    @Field(() => ProductTypeTranslationCreateNestedManyWithoutProductTypeInput, {nullable:true})
    translations?: ProductTypeTranslationCreateNestedManyWithoutProductTypeInput;
}
