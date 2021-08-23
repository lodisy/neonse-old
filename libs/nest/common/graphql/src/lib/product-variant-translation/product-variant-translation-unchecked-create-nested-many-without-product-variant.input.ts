import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantTranslationCreateWithoutProductVariantInput } from './product-variant-translation-create-without-product-variant.input';
import { ProductVariantTranslationCreateOrConnectWithoutProductVariantInput } from './product-variant-translation-create-or-connect-without-product-variant.input';
import { ProductVariantTranslationCreateManyProductVariantInputEnvelope } from './product-variant-translation-create-many-product-variant-input-envelope.input';
import { ProductVariantTranslationWhereUniqueInput } from './product-variant-translation-where-unique.input';

@InputType()
export class ProductVariantTranslationUncheckedCreateNestedManyWithoutProductVariantInput {

    @Field(() => [ProductVariantTranslationCreateWithoutProductVariantInput], {nullable:true})
    create?: Array<ProductVariantTranslationCreateWithoutProductVariantInput>;

    @Field(() => [ProductVariantTranslationCreateOrConnectWithoutProductVariantInput], {nullable:true})
    connectOrCreate?: Array<ProductVariantTranslationCreateOrConnectWithoutProductVariantInput>;

    @Field(() => ProductVariantTranslationCreateManyProductVariantInputEnvelope, {nullable:true})
    createMany?: ProductVariantTranslationCreateManyProductVariantInputEnvelope;

    @Field(() => [ProductVariantTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductVariantTranslationWhereUniqueInput>;
}
