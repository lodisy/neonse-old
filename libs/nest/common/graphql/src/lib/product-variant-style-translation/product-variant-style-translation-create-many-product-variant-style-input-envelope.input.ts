import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationCreateManyProductVariantStyleInput } from './product-variant-style-translation-create-many-product-variant-style.input';

@InputType()
export class ProductVariantStyleTranslationCreateManyProductVariantStyleInputEnvelope {

    @Field(() => [ProductVariantStyleTranslationCreateManyProductVariantStyleInput], {nullable:false})
    data!: Array<ProductVariantStyleTranslationCreateManyProductVariantStyleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
