import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryTranslationWhereUniqueInput } from './product-category-translation-where-unique.input';
import { ProductCategoryTranslationUpdateWithoutProductCategoryInput } from './product-category-translation-update-without-product-category.input';

@InputType()
export class ProductCategoryTranslationUpdateWithWhereUniqueWithoutProductCategoryInput {

    @Field(() => ProductCategoryTranslationWhereUniqueInput, {nullable:false})
    where!: ProductCategoryTranslationWhereUniqueInput;

    @Field(() => ProductCategoryTranslationUpdateWithoutProductCategoryInput, {nullable:false})
    data!: ProductCategoryTranslationUpdateWithoutProductCategoryInput;
}
