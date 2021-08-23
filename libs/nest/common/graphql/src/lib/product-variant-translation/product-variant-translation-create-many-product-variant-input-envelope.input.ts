import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantTranslationCreateManyProductVariantInput } from './product-variant-translation-create-many-product-variant.input';

@InputType()
export class ProductVariantTranslationCreateManyProductVariantInputEnvelope {

    @Field(() => [ProductVariantTranslationCreateManyProductVariantInput], {nullable:false})
    data!: Array<ProductVariantTranslationCreateManyProductVariantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
