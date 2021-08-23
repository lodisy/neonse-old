import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryTranslationWhereUniqueInput } from './product-category-translation-where-unique.input';

@ArgsType()
export class FindUniqueProductCategoryTranslationArgs {

    @Field(() => ProductCategoryTranslationWhereUniqueInput, {nullable:false})
    where!: ProductCategoryTranslationWhereUniqueInput;
}
