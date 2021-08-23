import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantTranslationScalarWhereInput } from './product-variant-translation-scalar-where.input';
import { ProductVariantTranslationUpdateManyMutationInput } from './product-variant-translation-update-many-mutation.input';

@InputType()
export class ProductVariantTranslationUpdateManyWithWhereWithoutProductVariantInput {

    @Field(() => ProductVariantTranslationScalarWhereInput, {nullable:false})
    where!: ProductVariantTranslationScalarWhereInput;

    @Field(() => ProductVariantTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantTranslationUpdateManyMutationInput;
}
