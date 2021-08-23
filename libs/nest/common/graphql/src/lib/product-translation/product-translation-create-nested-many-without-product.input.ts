import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTranslationCreateWithoutProductInput } from './product-translation-create-without-product.input';
import { ProductTranslationCreateOrConnectWithoutProductInput } from './product-translation-create-or-connect-without-product.input';
import { ProductTranslationCreateManyProductInputEnvelope } from './product-translation-create-many-product-input-envelope.input';
import { ProductTranslationWhereUniqueInput } from './product-translation-where-unique.input';

@InputType()
export class ProductTranslationCreateNestedManyWithoutProductInput {

    @Field(() => [ProductTranslationCreateWithoutProductInput], {nullable:true})
    create?: Array<ProductTranslationCreateWithoutProductInput>;

    @Field(() => [ProductTranslationCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ProductTranslationCreateOrConnectWithoutProductInput>;

    @Field(() => ProductTranslationCreateManyProductInputEnvelope, {nullable:true})
    createMany?: ProductTranslationCreateManyProductInputEnvelope;

    @Field(() => [ProductTranslationWhereUniqueInput], {nullable:true})
    connect?: Array<ProductTranslationWhereUniqueInput>;
}
