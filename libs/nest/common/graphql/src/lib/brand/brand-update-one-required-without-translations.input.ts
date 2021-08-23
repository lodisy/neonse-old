import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutTranslationsInput } from './brand-create-without-translations.input';
import { BrandCreateOrConnectWithoutTranslationsInput } from './brand-create-or-connect-without-translations.input';
import { BrandUpsertWithoutTranslationsInput } from './brand-upsert-without-translations.input';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { BrandUpdateWithoutTranslationsInput } from './brand-update-without-translations.input';

@InputType()
export class BrandUpdateOneRequiredWithoutTranslationsInput {

    @Field(() => BrandCreateWithoutTranslationsInput, {nullable:true})
    create?: BrandCreateWithoutTranslationsInput;

    @Field(() => BrandCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: BrandCreateOrConnectWithoutTranslationsInput;

    @Field(() => BrandUpsertWithoutTranslationsInput, {nullable:true})
    upsert?: BrandUpsertWithoutTranslationsInput;

    @Field(() => BrandWhereUniqueInput, {nullable:true})
    connect?: BrandWhereUniqueInput;

    @Field(() => BrandUpdateWithoutTranslationsInput, {nullable:true})
    update?: BrandUpdateWithoutTranslationsInput;
}
