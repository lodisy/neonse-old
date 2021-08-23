import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantColorTranslationCreateWithoutProductVariantColorInput } from './product-variant-color-translation-create-without-product-variant-color.input';
import { ProductVariantColorTranslationCreateOrConnectWithoutProductVariantColorInput } from './product-variant-color-translation-create-or-connect-without-product-variant-color.input';
import { ProductVariantColorTranslationUpsertWithWhereUniqueWithoutProductVariantColorInput } from './product-variant-color-translation-upsert-with-where-unique-without-product-variant-color.input';
import { ProductVariantColorTranslationCreateManyProductVariantColorInputEnvelope } from './product-variant-color-translation-create-many-product-variant-color-input-envelope.input';
import { ProductVariantColorTranslationWhereUniqueInput } from './product-variant-color-translation-where-unique.input';
import { ProductVariantColorTranslationUpdateWithWhereUniqueWithoutProductVariantColorInput } from './product-variant-color-translation-update-with-where-unique-without-product-variant-color.input';
import { ProductVariantColorTranslationUpdateManyWithWhereWithoutProductVariantColorInput } from './product-variant-color-translation-update-many-with-where-without-product-variant-color.input';
import { ProductVariantColorTranslationScalarWhereInput } from './product-variant-color-translation-scalar-where.input';

@InputType()
export class ProductVariantColorTranslationUncheckedUpdateManyWithoutProductVariantColorInput {

    @Field(() => [ProductVariantColorTranslationCreateWithoutProductVariantColorInput], {nullable:true})
    create?: Array<ProductVariantColorTranslationCreateWithoutProductVariantColorInput>;

    @Field(() => [ProductVariantColorTranslationCreateOrConnectWithoutProductVariantColorInput], {nullable:true})
    connectOrCreate?: Array<ProductVariantColorTranslationCreateOrConnectWithoutProductVariantColorInput>;

    @Field(() => [ProductVariantColorTranslationUpsertWithWhereUniqueWithoutProductVariantColorInput], {nullable:true})
    upsert?: Array<ProductVariantColorTranslationUpsertWithWhereUniqueWithoutProductVariantColorInput>;

    @Field(() => ProductVariantColorTranslationCreateManyProductVariantColorInputEnvelope, {nullable:true})
    createMany?: ProductVariantColorTranslationCreateManyProductVariantColorInputEnvelope;

    @Field(() => [ProductVariantColorTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductVariantColorTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantColorTranslationWhereUniqueInput], {nullable:true})
    set?: Array<ProductVariantColorTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantColorTranslationWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductVariantColorTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantColorTranslationWhereUniqueInput], {nullable:true})
    delete?: Array<ProductVariantColorTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantColorTranslationUpdateWithWhereUniqueWithoutProductVariantColorInput], {nullable:true})
    update?: Array<ProductVariantColorTranslationUpdateWithWhereUniqueWithoutProductVariantColorInput>;

    @Field(() => [ProductVariantColorTranslationUpdateManyWithWhereWithoutProductVariantColorInput], {nullable:true})
    updateMany?: Array<ProductVariantColorTranslationUpdateManyWithWhereWithoutProductVariantColorInput>;

    @Field(() => [ProductVariantColorTranslationScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductVariantColorTranslationScalarWhereInput>;
}
