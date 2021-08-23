import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTranslationCreateWithoutProductInput } from './product-translation-create-without-product.input';
import { ProductTranslationCreateOrConnectWithoutProductInput } from './product-translation-create-or-connect-without-product.input';
import { ProductTranslationUpsertWithWhereUniqueWithoutProductInput } from './product-translation-upsert-with-where-unique-without-product.input';
import { ProductTranslationCreateManyProductInputEnvelope } from './product-translation-create-many-product-input-envelope.input';
import { ProductTranslationWhereUniqueInput } from './product-translation-where-unique.input';
import { ProductTranslationUpdateWithWhereUniqueWithoutProductInput } from './product-translation-update-with-where-unique-without-product.input';
import { ProductTranslationUpdateManyWithWhereWithoutProductInput } from './product-translation-update-many-with-where-without-product.input';
import { ProductTranslationScalarWhereInput } from './product-translation-scalar-where.input';

@InputType()
export class ProductTranslationUpdateManyWithoutProductInput {

    @Field(() => [ProductTranslationCreateWithoutProductInput], {nullable:true})
    create?: Array<ProductTranslationCreateWithoutProductInput>;

    @Field(() => [ProductTranslationCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ProductTranslationCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductTranslationUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<ProductTranslationUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductTranslationCreateManyProductInputEnvelope, {nullable:true})
    createMany?: ProductTranslationCreateManyProductInputEnvelope;

    @Field(() => [ProductTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductTranslationWhereUniqueInput>;

    @Field(() => [ProductTranslationWhereUniqueInput], {nullable:true})
    set?: Array<ProductTranslationWhereUniqueInput>;

    @Field(() => [ProductTranslationWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductTranslationWhereUniqueInput>;

    @Field(() => [ProductTranslationWhereUniqueInput], {nullable:true})
    delete?: Array<ProductTranslationWhereUniqueInput>;

    @Field(() => [ProductTranslationUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<ProductTranslationUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductTranslationUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<ProductTranslationUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductTranslationScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductTranslationScalarWhereInput>;
}
