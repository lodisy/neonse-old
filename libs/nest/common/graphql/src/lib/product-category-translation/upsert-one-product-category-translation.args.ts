import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryTranslationWhereUniqueInput } from './product-category-translation-where-unique.input';
import { ProductCategoryTranslationCreateInput } from './product-category-translation-create.input';
import { ProductCategoryTranslationUpdateInput } from './product-category-translation-update.input';

@ArgsType()
export class UpsertOneProductCategoryTranslationArgs {

    @Field(() => ProductCategoryTranslationWhereUniqueInput, {nullable:false})
    where!: ProductCategoryTranslationWhereUniqueInput;

    @Field(() => ProductCategoryTranslationCreateInput, {nullable:false})
    create!: ProductCategoryTranslationCreateInput;

    @Field(() => ProductCategoryTranslationUpdateInput, {nullable:false})
    update!: ProductCategoryTranslationUpdateInput;
}
