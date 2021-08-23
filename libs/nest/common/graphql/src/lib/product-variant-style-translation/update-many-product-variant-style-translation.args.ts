import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationUpdateManyMutationInput } from './product-variant-style-translation-update-many-mutation.input';
import { ProductVariantStyleTranslationWhereInput } from './product-variant-style-translation-where.input';

@ArgsType()
export class UpdateManyProductVariantStyleTranslationArgs {

    @Field(() => ProductVariantStyleTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantStyleTranslationUpdateManyMutationInput;

    @Field(() => ProductVariantStyleTranslationWhereInput, {nullable:true})
    where?: ProductVariantStyleTranslationWhereInput;
}
