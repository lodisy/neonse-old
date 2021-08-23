import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationScalarWhereInput } from './product-variant-style-translation-scalar-where.input';
import { ProductVariantStyleTranslationUpdateManyMutationInput } from './product-variant-style-translation-update-many-mutation.input';

@InputType()
export class ProductVariantStyleTranslationUpdateManyWithWhereWithoutProductVariantStyleInput {

    @Field(() => ProductVariantStyleTranslationScalarWhereInput, {nullable:false})
    where!: ProductVariantStyleTranslationScalarWhereInput;

    @Field(() => ProductVariantStyleTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantStyleTranslationUpdateManyMutationInput;
}
