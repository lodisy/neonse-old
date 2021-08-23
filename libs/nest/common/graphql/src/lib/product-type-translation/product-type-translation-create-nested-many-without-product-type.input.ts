import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeTranslationCreateWithoutProductTypeInput } from './product-type-translation-create-without-product-type.input';
import { ProductTypeTranslationCreateOrConnectWithoutProductTypeInput } from './product-type-translation-create-or-connect-without-product-type.input';
import { ProductTypeTranslationCreateManyProductTypeInputEnvelope } from './product-type-translation-create-many-product-type-input-envelope.input';
import { ProductTypeTranslationWhereUniqueInput } from './product-type-translation-where-unique.input';

@InputType()
export class ProductTypeTranslationCreateNestedManyWithoutProductTypeInput {

    @Field(() => [ProductTypeTranslationCreateWithoutProductTypeInput], {nullable:true})
    create?: Array<ProductTypeTranslationCreateWithoutProductTypeInput>;

    @Field(() => [ProductTypeTranslationCreateOrConnectWithoutProductTypeInput], {nullable:true})
    connectOrCreate?: Array<ProductTypeTranslationCreateOrConnectWithoutProductTypeInput>;

    @Field(() => ProductTypeTranslationCreateManyProductTypeInputEnvelope, {nullable:true})
    createMany?: ProductTypeTranslationCreateManyProductTypeInputEnvelope;

    @Field(() => [ProductTypeTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductTypeTranslationWhereUniqueInput>;
}
