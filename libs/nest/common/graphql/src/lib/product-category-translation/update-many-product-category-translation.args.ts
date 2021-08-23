import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryTranslationUpdateManyMutationInput } from './product-category-translation-update-many-mutation.input';
import { ProductCategoryTranslationWhereInput } from './product-category-translation-where.input';

@ArgsType()
export class UpdateManyProductCategoryTranslationArgs {

    @Field(() => ProductCategoryTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductCategoryTranslationUpdateManyMutationInput;

    @Field(() => ProductCategoryTranslationWhereInput, {nullable:true})
    where?: ProductCategoryTranslationWhereInput;
}
