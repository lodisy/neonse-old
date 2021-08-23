import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryCreateWithoutTranslationsInput } from './product-category-create-without-translations.input';

@InputType()
export class ProductCategoryCreateOrConnectWithoutTranslationsInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    where!: ProductCategoryWhereUniqueInput;

    @Field(() => ProductCategoryCreateWithoutTranslationsInput, {nullable:false})
    create!: ProductCategoryCreateWithoutTranslationsInput;
}
