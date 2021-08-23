import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryTranslationUpdateInput } from './product-category-translation-update.input';
import { ProductCategoryTranslationWhereUniqueInput } from './product-category-translation-where-unique.input';

@ArgsType()
export class UpdateOneProductCategoryTranslationArgs {

    @Field(() => ProductCategoryTranslationUpdateInput, {nullable:false})
    data!: ProductCategoryTranslationUpdateInput;

    @Field(() => ProductCategoryTranslationWhereUniqueInput, {nullable:false})
    where!: ProductCategoryTranslationWhereUniqueInput;
}
