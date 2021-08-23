import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryTranslationWhereUniqueInput } from './product-category-translation-where-unique.input';
import { ProductCategoryTranslationUpdateWithoutProductCategoryInput } from './product-category-translation-update-without-product-category.input';
import { ProductCategoryTranslationCreateWithoutProductCategoryInput } from './product-category-translation-create-without-product-category.input';

@InputType()
export class ProductCategoryTranslationUpsertWithWhereUniqueWithoutProductCategoryInput {

    @Field(() => ProductCategoryTranslationWhereUniqueInput, {nullable:false})
    where!: ProductCategoryTranslationWhereUniqueInput;

    @Field(() => ProductCategoryTranslationUpdateWithoutProductCategoryInput, {nullable:false})
    update!: ProductCategoryTranslationUpdateWithoutProductCategoryInput;

    @Field(() => ProductCategoryTranslationCreateWithoutProductCategoryInput, {nullable:false})
    create!: ProductCategoryTranslationCreateWithoutProductCategoryInput;
}
