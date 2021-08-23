import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationUpdateManyMutationInput } from './product-variant-color-translation-update-many-mutation.input';
import { ProductVariantColorTranslationWhereInput } from './product-variant-color-translation-where.input';

@ArgsType()
export class UpdateManyProductVariantColorTranslationArgs {

    @Field(() => ProductVariantColorTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantColorTranslationUpdateManyMutationInput;

    @Field(() => ProductVariantColorTranslationWhereInput, {nullable:true})
    where?: ProductVariantColorTranslationWhereInput;
}
