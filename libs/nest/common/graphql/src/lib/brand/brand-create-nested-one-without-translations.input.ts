import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutTranslationsInput } from './brand-create-without-translations.input';
import { BrandCreateOrConnectWithoutTranslationsInput } from './brand-create-or-connect-without-translations.input';
import { BrandWhereUniqueInput } from './brand-where-unique.input';

@InputType()
export class BrandCreateNestedOneWithoutTranslationsInput {

    @Field(() => BrandCreateWithoutTranslationsInput, {nullable:true})
    create?: BrandCreateWithoutTranslationsInput;

    @Field(() => BrandCreateOrConnectWithoutTranslationsInput, {nullable:true})
    connectOrCreate?: BrandCreateOrConnectWithoutTranslationsInput;

    @Field(() => BrandWhereUniqueInput, {nullable:true})
    connect?: BrandWhereUniqueInput;
}
