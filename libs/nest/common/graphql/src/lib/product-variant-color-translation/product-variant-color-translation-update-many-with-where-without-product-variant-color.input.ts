import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorTranslationScalarWhereInput } from './product-variant-color-translation-scalar-where.input';
import { ProductVariantColorTranslationUpdateManyMutationInput } from './product-variant-color-translation-update-many-mutation.input';

@InputType()
export class ProductVariantColorTranslationUpdateManyWithWhereWithoutProductVariantColorInput {

    @Field(() => ProductVariantColorTranslationScalarWhereInput, {nullable:false})
    where!: ProductVariantColorTranslationScalarWhereInput;

    @Field(() => ProductVariantColorTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantColorTranslationUpdateManyMutationInput;
}
