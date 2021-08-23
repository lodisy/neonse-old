import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantTranslationUpdateManyMutationInput } from './product-variant-translation-update-many-mutation.input';
import { ProductVariantTranslationWhereInput } from './product-variant-translation-where.input';

@ArgsType()
export class UpdateManyProductVariantTranslationArgs {

    @Field(() => ProductVariantTranslationUpdateManyMutationInput, {nullable:false})
    data!: ProductVariantTranslationUpdateManyMutationInput;

    @Field(() => ProductVariantTranslationWhereInput, {nullable:true})
    where?: ProductVariantTranslationWhereInput;
}
