import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeTranslationCreateWithoutProductTypeInput } from './product-type-translation-create-without-product-type.input';
import { ProductTypeTranslationCreateOrConnectWithoutProductTypeInput } from './product-type-translation-create-or-connect-without-product-type.input';
import { ProductTypeTranslationUpsertWithWhereUniqueWithoutProductTypeInput } from './product-type-translation-upsert-with-where-unique-without-product-type.input';
import { ProductTypeTranslationCreateManyProductTypeInputEnvelope } from './product-type-translation-create-many-product-type-input-envelope.input';
import { ProductTypeTranslationWhereUniqueInput } from './product-type-translation-where-unique.input';
import { ProductTypeTranslationUpdateWithWhereUniqueWithoutProductTypeInput } from './product-type-translation-update-with-where-unique-without-product-type.input';
import { ProductTypeTranslationUpdateManyWithWhereWithoutProductTypeInput } from './product-type-translation-update-many-with-where-without-product-type.input';
import { ProductTypeTranslationScalarWhereInput } from './product-type-translation-scalar-where.input';

@InputType()
export class ProductTypeTranslationUncheckedUpdateManyWithoutProductTypeInput {

    @Field(() => [ProductTypeTranslationCreateWithoutProductTypeInput], {nullable:true})
    create?: Array<ProductTypeTranslationCreateWithoutProductTypeInput>;

    @Field(() => [ProductTypeTranslationCreateOrConnectWithoutProductTypeInput], {nullable:true})
    connectOrCreate?: Array<ProductTypeTranslationCreateOrConnectWithoutProductTypeInput>;

    @Field(() => [ProductTypeTranslationUpsertWithWhereUniqueWithoutProductTypeInput], {nullable:true})
    upsert?: Array<ProductTypeTranslationUpsertWithWhereUniqueWithoutProductTypeInput>;

    @Field(() => ProductTypeTranslationCreateManyProductTypeInputEnvelope, {nullable:true})
    createMany?: ProductTypeTranslationCreateManyProductTypeInputEnvelope;

    @Field(() => [ProductTypeTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductTypeTranslationWhereUniqueInput>;

    @Field(() => [ProductTypeTranslationWhereUniqueInput], {nullable:true})
    set?: Array<ProductTypeTranslationWhereUniqueInput>;

    @Field(() => [ProductTypeTranslationWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductTypeTranslationWhereUniqueInput>;

    @Field(() => [ProductTypeTranslationWhereUniqueInput], {nullable:true})
    delete?: Array<ProductTypeTranslationWhereUniqueInput>;

    @Field(() => [ProductTypeTranslationUpdateWithWhereUniqueWithoutProductTypeInput], {nullable:true})
    update?: Array<ProductTypeTranslationUpdateWithWhereUniqueWithoutProductTypeInput>;

    @Field(() => [ProductTypeTranslationUpdateManyWithWhereWithoutProductTypeInput], {nullable:true})
    updateMany?: Array<ProductTypeTranslationUpdateManyWithWhereWithoutProductTypeInput>;

    @Field(() => [ProductTypeTranslationScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductTypeTranslationScalarWhereInput>;
}
