import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryTranslationCreateInput } from './product-category-translation-create.input';

@ArgsType()
export class CreateOneProductCategoryTranslationArgs {

    @Field(() => ProductCategoryTranslationCreateInput, {nullable:false})
    data!: ProductCategoryTranslationCreateInput;
}
