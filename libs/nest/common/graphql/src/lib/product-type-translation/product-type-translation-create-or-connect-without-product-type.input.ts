import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeTranslationWhereUniqueInput } from './product-type-translation-where-unique.input';
import { ProductTypeTranslationCreateWithoutProductTypeInput } from './product-type-translation-create-without-product-type.input';

@InputType()
export class ProductTypeTranslationCreateOrConnectWithoutProductTypeInput {

    @Field(() => ProductTypeTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTypeTranslationWhereUniqueInput;

    @Field(() => ProductTypeTranslationCreateWithoutProductTypeInput, {nullable:false})
    create!: ProductTypeTranslationCreateWithoutProductTypeInput;
}
