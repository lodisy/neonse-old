import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryTranslationCreateWithoutProductCategoryInput } from './product-category-translation-create-without-product-category.input';
import { ProductCategoryTranslationCreateOrConnectWithoutProductCategoryInput } from './product-category-translation-create-or-connect-without-product-category.input';
import { ProductCategoryTranslationUpsertWithWhereUniqueWithoutProductCategoryInput } from './product-category-translation-upsert-with-where-unique-without-product-category.input';
import { ProductCategoryTranslationCreateManyProductCategoryInputEnvelope } from './product-category-translation-create-many-product-category-input-envelope.input';
import { ProductCategoryTranslationWhereUniqueInput } from './product-category-translation-where-unique.input';
import { ProductCategoryTranslationUpdateWithWhereUniqueWithoutProductCategoryInput } from './product-category-translation-update-with-where-unique-without-product-category.input';
import { ProductCategoryTranslationUpdateManyWithWhereWithoutProductCategoryInput } from './product-category-translation-update-many-with-where-without-product-category.input';
import { ProductCategoryTranslationScalarWhereInput } from './product-category-translation-scalar-where.input';

@InputType()
export class ProductCategoryTranslationUpdateManyWithoutProductCategoryInput {

    @Field(() => [ProductCategoryTranslationCreateWithoutProductCategoryInput], {nullable:true})
    create?: Array<ProductCategoryTranslationCreateWithoutProductCategoryInput>;

    @Field(() => [ProductCategoryTranslationCreateOrConnectWithoutProductCategoryInput], {nullable:true})
    connectOrCreate?: Array<ProductCategoryTranslationCreateOrConnectWithoutProductCategoryInput>;

    @Field(() => [ProductCategoryTranslationUpsertWithWhereUniqueWithoutProductCategoryInput], {nullable:true})
    upsert?: Array<ProductCategoryTranslationUpsertWithWhereUniqueWithoutProductCategoryInput>;

    @Field(() => ProductCategoryTranslationCreateManyProductCategoryInputEnvelope, {nullable:true})
    createMany?: ProductCategoryTranslationCreateManyProductCategoryInputEnvelope;

    @Field(() => [ProductCategoryTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductCategoryTranslationWhereUniqueInput>;

    @Field(() => [ProductCategoryTranslationWhereUniqueInput], {nullable:true})
    set?: Array<ProductCategoryTranslationWhereUniqueInput>;

    @Field(() => [ProductCategoryTranslationWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductCategoryTranslationWhereUniqueInput>;

    @Field(() => [ProductCategoryTranslationWhereUniqueInput], {nullable:true})
    delete?: Array<ProductCategoryTranslationWhereUniqueInput>;

    @Field(() => [ProductCategoryTranslationUpdateWithWhereUniqueWithoutProductCategoryInput], {nullable:true})
    update?: Array<ProductCategoryTranslationUpdateWithWhereUniqueWithoutProductCategoryInput>;

    @Field(() => [ProductCategoryTranslationUpdateManyWithWhereWithoutProductCategoryInput], {nullable:true})
    updateMany?: Array<ProductCategoryTranslationUpdateManyWithWhereWithoutProductCategoryInput>;

    @Field(() => [ProductCategoryTranslationScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductCategoryTranslationScalarWhereInput>;
}
