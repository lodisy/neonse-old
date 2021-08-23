import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { BrandCreateWithoutTranslationsInput } from './brand-create-without-translations.input';

@InputType()
export class BrandCreateOrConnectWithoutTranslationsInput {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    where!: BrandWhereUniqueInput;

    @Field(() => BrandCreateWithoutTranslationsInput, {nullable:false})
    create!: BrandCreateWithoutTranslationsInput;
}
