import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorTranslationCreateManyProductVariantColorInput } from './product-variant-color-translation-create-many-product-variant-color.input';

@InputType()
export class ProductVariantColorTranslationCreateManyProductVariantColorInputEnvelope {

    @Field(() => [ProductVariantColorTranslationCreateManyProductVariantColorInput], {nullable:false})
    data!: Array<ProductVariantColorTranslationCreateManyProductVariantColorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
