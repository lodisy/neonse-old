import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput } from './product-variant-style-translation-create-without-product-variant-style.input';
import { ProductVariantStyleTranslationCreateOrConnectWithoutProductVariantStyleInput } from './product-variant-style-translation-create-or-connect-without-product-variant-style.input';
import { ProductVariantStyleTranslationUpsertWithWhereUniqueWithoutProductVariantStyleInput } from './product-variant-style-translation-upsert-with-where-unique-without-product-variant-style.input';
import { ProductVariantStyleTranslationCreateManyProductVariantStyleInputEnvelope } from './product-variant-style-translation-create-many-product-variant-style-input-envelope.input';
import { ProductVariantStyleTranslationWhereUniqueInput } from './product-variant-style-translation-where-unique.input';
import { ProductVariantStyleTranslationUpdateWithWhereUniqueWithoutProductVariantStyleInput } from './product-variant-style-translation-update-with-where-unique-without-product-variant-style.input';
import { ProductVariantStyleTranslationUpdateManyWithWhereWithoutProductVariantStyleInput } from './product-variant-style-translation-update-many-with-where-without-product-variant-style.input';
import { ProductVariantStyleTranslationScalarWhereInput } from './product-variant-style-translation-scalar-where.input';

@InputType()
export class ProductVariantStyleTranslationUncheckedUpdateManyWithoutProductVariantStyleInput {

    @Field(() => [ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput], {nullable:true})
    create?: Array<ProductVariantStyleTranslationCreateWithoutProductVariantStyleInput>;

    @Field(() => [ProductVariantStyleTranslationCreateOrConnectWithoutProductVariantStyleInput], {nullable:true})
    connectOrCreate?: Array<ProductVariantStyleTranslationCreateOrConnectWithoutProductVariantStyleInput>;

    @Field(() => [ProductVariantStyleTranslationUpsertWithWhereUniqueWithoutProductVariantStyleInput], {nullable:true})
    upsert?: Array<ProductVariantStyleTranslationUpsertWithWhereUniqueWithoutProductVariantStyleInput>;

    @Field(() => ProductVariantStyleTranslationCreateManyProductVariantStyleInputEnvelope, {nullable:true})
    createMany?: ProductVariantStyleTranslationCreateManyProductVariantStyleInputEnvelope;

    @Field(() => [ProductVariantStyleTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductVariantStyleTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantStyleTranslationWhereUniqueInput], {nullable:true})
    set?: Array<ProductVariantStyleTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantStyleTranslationWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductVariantStyleTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantStyleTranslationWhereUniqueInput], {nullable:true})
    delete?: Array<ProductVariantStyleTranslationWhereUniqueInput>;

    @Field(() => [ProductVariantStyleTranslationUpdateWithWhereUniqueWithoutProductVariantStyleInput], {nullable:true})
    update?: Array<ProductVariantStyleTranslationUpdateWithWhereUniqueWithoutProductVariantStyleInput>;

    @Field(() => [ProductVariantStyleTranslationUpdateManyWithWhereWithoutProductVariantStyleInput], {nullable:true})
    updateMany?: Array<ProductVariantStyleTranslationUpdateManyWithWhereWithoutProductVariantStyleInput>;

    @Field(() => [ProductVariantStyleTranslationScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductVariantStyleTranslationScalarWhereInput>;
}
