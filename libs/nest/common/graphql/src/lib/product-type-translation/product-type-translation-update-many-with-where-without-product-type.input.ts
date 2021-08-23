import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeTranslationScalarWhereInput } from './product-type-translation-scalar-where.input';
import { ProductTypeTranslationUpdateManyMutationInput } from './product-type-translation-update-many-mutation.input';

@InputType()
export class ProductTypeTranslationUpdateManyWithWhereWithoutProductTypeInput {

    @Field(() => ProductTypeTranslationScalarWhereInput, {nullable:false})
    where!: ProductTypeTranslationScalarWhereInput;

    @Field(() => ProductTypeTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductTypeTranslationUpdateManyMutationInput;
}
