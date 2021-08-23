import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductCategoryUncheckedCreateNestedManyWithoutParentInput } from './product-category-unchecked-create-nested-many-without-parent.input';
import { ProductCategoryTranslationUncheckedCreateNestedManyWithoutProductCategoryInput } from '../product-category-translation/product-category-translation-unchecked-create-nested-many-without-product-category.input';

@InputType()
export class ProductCategoryUncheckedCreateWithoutParentInput {

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

    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: ProductCategoryUncheckedCreateNestedManyWithoutParentInput;

    @Field(() => ProductCategoryTranslationUncheckedCreateNestedManyWithoutProductCategoryInput, {nullable:true})
    translations?: ProductCategoryTranslationUncheckedCreateNestedManyWithoutProductCategoryInput;
}
