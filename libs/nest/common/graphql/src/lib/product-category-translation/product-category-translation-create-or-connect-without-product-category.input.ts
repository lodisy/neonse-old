import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryTranslationWhereUniqueInput } from './product-category-translation-where-unique.input';
import { ProductCategoryTranslationCreateWithoutProductCategoryInput } from './product-category-translation-create-without-product-category.input';

@InputType()
export class ProductCategoryTranslationCreateOrConnectWithoutProductCategoryInput {

    @Field(() => ProductCategoryTranslationWhereUniqueInput, {nullable:false})
    where!: ProductCategoryTranslationWhereUniqueInput;

    @Field(() => ProductCategoryTranslationCreateWithoutProductCategoryInput, {nullable:false})
    create!: ProductCategoryTranslationCreateWithoutProductCategoryInput;
}
