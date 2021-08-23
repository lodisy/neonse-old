import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryTranslationCreateWithoutProductCategoryInput } from './product-category-translation-create-without-product-category.input';
import { ProductCategoryTranslationCreateOrConnectWithoutProductCategoryInput } from './product-category-translation-create-or-connect-without-product-category.input';
import { ProductCategoryTranslationCreateManyProductCategoryInputEnvelope } from './product-category-translation-create-many-product-category-input-envelope.input';
import { ProductCategoryTranslationWhereUniqueInput } from './product-category-translation-where-unique.input';

@InputType()
export class ProductCategoryTranslationCreateNestedManyWithoutProductCategoryInput {

    @Field(() => [ProductCategoryTranslationCreateWithoutProductCategoryInput], {nullable:true})
    create?: Array<ProductCategoryTranslationCreateWithoutProductCategoryInput>;

    @Field(() => [ProductCategoryTranslationCreateOrConnectWithoutProductCategoryInput], {nullable:true})
    connectOrCreate?: Array<ProductCategoryTranslationCreateOrConnectWithoutProductCategoryInput>;

    @Field(() => ProductCategoryTranslationCreateManyProductCategoryInputEnvelope, {nullable:true})
    createMany?: ProductCategoryTranslationCreateManyProductCategoryInputEnvelope;

    @Field(() => [ProductCategoryTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductCategoryTranslationWhereUniqueInput>;
}
