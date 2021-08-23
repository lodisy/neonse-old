import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationCreateInput } from './product-variant-style-translation-create.input';

@ArgsType()
export class CreateOneProductVariantStyleTranslationArgs {

    @Field(() => ProductVariantStyleTranslationCreateInput, {nullable:false})
    data!: ProductVariantStyleTranslationCreateInput;
}
