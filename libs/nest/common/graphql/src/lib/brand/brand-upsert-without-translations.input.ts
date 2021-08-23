import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandUpdateWithoutTranslationsInput } from './brand-update-without-translations.input';
import { BrandCreateWithoutTranslationsInput } from './brand-create-without-translations.input';

@InputType()
export class BrandUpsertWithoutTranslationsInput {

    @Field(() => BrandUpdateWithoutTranslationsInput, {nullable:false})
    update!: BrandUpdateWithoutTranslationsInput;

    @Field(() => BrandCreateWithoutTranslationsInput, {nullable:false})
    create!: BrandCreateWithoutTranslationsInput;
}
