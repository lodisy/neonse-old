import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTranslationWhereUniqueInput } from './product-translation-where-unique.input';
import { ProductTranslationUpdateWithoutProductInput } from './product-translation-update-without-product.input';
import { ProductTranslationCreateWithoutProductInput } from './product-translation-create-without-product.input';

@InputType()
export class ProductTranslationUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ProductTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTranslationWhereUniqueInput;

    @Field(() => ProductTranslationUpdateWithoutProductInput, {nullable:false})
    update!: ProductTranslationUpdateWithoutProductInput;

    @Field(() => ProductTranslationCreateWithoutProductInput, {nullable:false})
    create!: ProductTranslationCreateWithoutProductInput;
}
