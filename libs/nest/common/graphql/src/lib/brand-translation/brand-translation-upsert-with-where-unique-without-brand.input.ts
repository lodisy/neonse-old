import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';
import { BrandTranslationUpdateWithoutBrandInput } from './brand-translation-update-without-brand.input';
import { BrandTranslationCreateWithoutBrandInput } from './brand-translation-create-without-brand.input';

@InputType()
export class BrandTranslationUpsertWithWhereUniqueWithoutBrandInput {

    @Field(() => BrandTranslationWhereUniqueInput, {nullable:false})
    where!: BrandTranslationWhereUniqueInput;

    @Field(() => BrandTranslationUpdateWithoutBrandInput, {nullable:false})
    update!: BrandTranslationUpdateWithoutBrandInput;

    @Field(() => BrandTranslationCreateWithoutBrandInput, {nullable:false})
    create!: BrandTranslationCreateWithoutBrandInput;
}
