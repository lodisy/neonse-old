import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutTranslationsInput } from './product-create-without-translations.input';
import { ProductCreateOrConnectWithoutTranslationsInput } from './product-create-or-connect-without-translations.input';
import { ProductUpsertWithoutTranslationsInput } from './product-upsert-without-translations.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutTranslationsInput } from './product-update-without-translations.input';

@InputType()
export class ProductUpdateOneWithoutTranslationsInput {

    @Field(() => ProductCreateWithoutTranslationsInput, {nullable:true})
    create?: ProductCreateWithoutTranslationsInput;

    @Field(() => ProductCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutTranslationsInput;

    @Field(() => ProductUpsertWithoutTranslationsInput, {nullable:true})
    upsert?: ProductUpsertWithoutTranslationsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProductUpdateWithoutTranslationsInput, {nullable:true})
    update?: ProductUpdateWithoutTranslationsInput;
}
