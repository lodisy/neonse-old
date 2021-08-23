import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeTranslationWhereUniqueInput } from './product-type-translation-where-unique.input';
import { ProductTypeTranslationUpdateWithoutProductTypeInput } from './product-type-translation-update-without-product-type.input';

@InputType()
export class ProductTypeTranslationUpdateWithWhereUniqueWithoutProductTypeInput {

    @Field(() => ProductTypeTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTypeTranslationWhereUniqueInput;

    @Field(() => ProductTypeTranslationUpdateWithoutProductTypeInput, {nullable:false})
    data!: ProductTypeTranslationUpdateWithoutProductTypeInput;
}
