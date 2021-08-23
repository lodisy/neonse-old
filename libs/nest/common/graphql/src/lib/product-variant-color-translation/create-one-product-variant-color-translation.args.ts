import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantColorTranslationCreateInput } from './product-variant-color-translation-create.input';

@ArgsType()
export class CreateOneProductVariantColorTranslationArgs {

    @Field(() => ProductVariantColorTranslationCreateInput, {nullable:false})
    data!: ProductVariantColorTranslationCreateInput;
}
