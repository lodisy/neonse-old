import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutTranslationsInput } from './product-category-create-without-translations.input';
import { ProductCategoryCreateOrConnectWithoutTranslationsInput } from './product-category-create-or-connect-without-translations.input';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryCreateNestedOneWithoutTranslationsInput {

    @Field(() => ProductCategoryCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductCategoryCreateWithoutTranslationsInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    connect?: ProductCategoryWhereUniqueInput;
}
