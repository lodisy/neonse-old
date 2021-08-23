import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTranslationWhereUniqueInput } from './product-translation-where-unique.input';
import { ProductTranslationUpdateWithoutProductInput } from './product-translation-update-without-product.input';

@InputType()
export class ProductTranslationUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ProductTranslationWhereUniqueInput, {nullable:false})
    where!: ProductTranslationWhereUniqueInput;

    @Field(() => ProductTranslationUpdateWithoutProductInput, {nullable:false})
    data!: ProductTranslationUpdateWithoutProductInput;
}
