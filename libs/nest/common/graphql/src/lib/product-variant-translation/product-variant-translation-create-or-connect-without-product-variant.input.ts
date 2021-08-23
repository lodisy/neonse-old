import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantTranslationWhereUniqueInput } from './product-variant-translation-where-unique.input';
import { ProductVariantTranslationCreateWithoutProductVariantInput } from './product-variant-translation-create-without-product-variant.input';

@InputType()
export class ProductVariantTranslationCreateOrConnectWithoutProductVariantInput {

    @Field(() => ProductVariantTranslationWhereUniqueInput, {nullable:false})
    where!: ProductVariantTranslationWhereUniqueInput;

    @Field(() => ProductVariantTranslationCreateWithoutProductVariantInput, {nullable:false})
    create!: ProductVariantTranslationCreateWithoutProductVariantInput;
}
