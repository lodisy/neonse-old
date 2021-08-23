import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeTranslationWhereUniqueInput } from './product-type-translation-where-unique.input';
import { ProductTypeTranslationUpdateWithoutProductTypeInput } from './product-type-translation-update-without-product-type.input';
import { ProductTypeTranslationCreateWithoutProductTypeInput } from './product-type-translation-create-without-product-type.input';

@InputType()
export class ProductTypeTranslationUpsertWithWhereUniqueWithoutProductTypeInput {

    @Field(() => ProductTypeTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTypeTranslationWhereUniqueInput;

    @Field(() => ProductTypeTranslationUpdateWithoutProductTypeInput, {nullable:false})
    update!: ProductTypeTranslationUpdateWithoutProductTypeInput;

    @Field(() => ProductTypeTranslationCreateWithoutProductTypeInput, {nullable:false})
    create!: ProductTypeTranslationCreateWithoutProductTypeInput;
}
