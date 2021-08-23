import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantTranslationCreateInput } from './product-variant-translation-create.input';

@ArgsType()
export class CreateOneProductVariantTranslationArgs {

    @Field(() => ProductVariantTranslationCreateInput, {nullable:false})
    data!: ProductVariantTranslationCreateInput;
}
