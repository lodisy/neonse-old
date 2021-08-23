import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTranslationScalarWhereInput } from './product-translation-scalar-where.input';
import { ProductTranslationUpdateManyMutationInput } from './product-translation-update-many-mutation.input';

@InputType()
export class ProductTranslationUpdateManyWithWhereWithoutProductInput {

    @Field(() => ProductTranslationScalarWhereInput, {nullable:false})
    where!: ProductTranslationScalarWhereInput;

    @Field(() => ProductTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductTranslationUpdateManyMutationInput;
}
