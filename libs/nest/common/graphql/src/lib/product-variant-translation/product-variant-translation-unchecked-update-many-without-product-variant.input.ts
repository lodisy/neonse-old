import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantTranslationCreateWithoutProductVariantInput } from './product-variant-translation-create-without-product-variant.input';
import { ProductVariantTranslationCreateOrConnectWithoutProductVariantInput } from './product-variant-translation-create-or-connect-without-product-variant.input';
import { ProductVariantTranslationUpsertWithWhereUniqueWithoutProductVariantInput } from './product-variant-translation-upsert-with-where-unique-without-product-variant.input';
import { ProductVariantTranslationCreateManyProductVariantInputEnvelope } from './product-variant-translation-create-many-product-variant-input-envelope.input';
import { ProductVariantTranslationWhereUniqueInput } from './product-variant-translation-where-unique.input';
import { ProductVariantTranslationUpdateWithWhereUniqueWithoutProductVariantInput } from './product-variant-translation-update-with-where-unique-without-product-variant.input';
import { ProductVariantTranslationUpdateManyWithWhereWithoutProductVariantInput } from './product-variant-translation-update-many-with-where-without-product-variant.input';
import { ProductVariantTranslationScalarWhereInput } from './product-variant-translation-scalar-where.input';

@InputType()
export class ProductVariantTranslationUncheckedUpdateManyWithoutProductVariantInput {

    @Field(() => [ProductVariantTranslationCreateWithoutProductVariantInput], {nullable:true})
    create?: Array<ProductVariantTranslationCreateWithoutProductVariantInput>;

    @Field(() => [ProductVariantTranslationCreateOrConnectWithoutProductVariantInput], {nullable:true})
    connectOrCreate?: Array<ProductVariantTranslationCreateOrConnectWithoutProductVariantInput>;

    @Field(() => [ProductVariantTranslationUpsertWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    upsert?: Array<ProductVariantTranslationUpsertWithWhereUniqueWithoutProductVariantInput>;

    @Field(() => ProductVariantTranslationCreateManyProductVariantInputEnvelope, {nullable:true})
    createMany?: ProductVariantTranslationCreateManyProductVariantInputEnvelope;

    @Field(() => [ProductVariantTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductVariantTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantTranslationWhereUniqueInput], {nullable:true})
    set?: Array<ProductVariantTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantTranslationWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductVariantTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantTranslationWhereUniqueInput], {nullable:true})
    delete?: Array<ProductVariantTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantTranslationUpdateWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    update?: Array<ProductVariantTranslationUpdateWithWhereUniqueWithoutProductVariantInput>;

    @Field(() => [ProductVariantTranslationUpdateManyWithWhereWithoutProductVariantInput], {nullable:true})
    updateMany?: Array<ProductVariantTranslationUpdateManyWithWhereWithoutProductVariantInput>;

    @Field(() => [ProductVariantTranslationScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductVariantTranslationScalarWhereInput>;
}
