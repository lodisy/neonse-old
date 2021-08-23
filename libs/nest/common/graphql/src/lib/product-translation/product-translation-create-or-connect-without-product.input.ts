import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTranslationWhereUniqueInput } from './product-translation-where-unique.input';
import { ProductTranslationCreateWithoutProductInput } from './product-translation-create-without-product.input';

@InputType()
export class ProductTranslationCreateOrConnectWithoutProductInput {

    @Field(() => ProductTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTranslationWhereUniqueInput;

    @Field(() => ProductTranslationCreateWithoutProductInput, {nullable:false})
    create!: ProductTranslationCreateWithoutProductInput;
}
