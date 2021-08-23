import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutTranslationsInput } from './product-category-create-without-translations.input';
import { ProductCategoryCreateOrConnectWithoutTranslationsInput } from './product-category-create-or-connect-without-translations.input';
import { ProductCategoryUpsertWithoutTranslationsInput } from './product-category-upsert-without-translations.input';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateWithoutTranslationsInput } from './product-category-update-without-translations.input';

@InputType()
export class ProductCategoryUpdateOneWithoutTranslationsInput {

    @Field(() => ProductCategoryCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductCategoryCreateWithoutTranslationsInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductCategoryUpsertWithoutTranslationsInput, {nullable:true})
    upsert?: ProductCategoryUpsertWithoutTranslationsInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    connect?: ProductCategoryWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductCategoryUpdateWithoutTranslationsInput, {nullable:true})
    update?: ProductCategoryUpdateWithoutTranslationsInput;
}
