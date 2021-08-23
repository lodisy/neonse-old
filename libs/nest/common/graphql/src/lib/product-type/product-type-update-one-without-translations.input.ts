import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTypeCreateWithoutTranslationsInput } from './product-type-create-without-translations.input';
import { ProductTypeCreateOrConnectWithoutTranslationsInput } from './product-type-create-or-connect-without-translations.input';
import { ProductTypeUpsertWithoutTranslationsInput } from './product-type-upsert-without-translations.input';
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input';
import { ProductTypeUpdateWithoutTranslationsInput } from './product-type-update-without-translations.input';

@InputType()
export class ProductTypeUpdateOneWithoutTranslationsInput {

    @Field(() => ProductTypeCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductTypeCreateWithoutTranslationsInput;

    @Field(() => ProductTypeCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductTypeCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductTypeUpsertWithoutTranslationsInput, {nullable:true})
    upsert?: ProductTypeUpsertWithoutTranslationsInput;

    @Field(() => ProductTypeWhereUniqueInput, {nullable:true})
    connect?: ProductTypeWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductTypeUpdateWithoutTranslationsInput, {nullable:true})
    update?: ProductTypeUpdateWithoutTranslationsInput;
}
