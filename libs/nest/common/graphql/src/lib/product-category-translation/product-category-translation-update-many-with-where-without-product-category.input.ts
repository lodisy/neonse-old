import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryTranslationScalarWhereInput } from './product-category-translation-scalar-where.input';
import { ProductCategoryTranslationUpdateManyMutationInput } from './product-category-translation-update-many-mutation.input';

@InputType()
export class ProductCategoryTranslationUpdateManyWithWhereWithoutProductCategoryInput {

    @Field(() => ProductCategoryTranslationScalarWhereInput, {nullable:false})
    where!: ProductCategoryTranslationScalarWhereInput;

    @Field(() => ProductCategoryTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductCategoryTranslationUpdateManyMutationInput;
}
