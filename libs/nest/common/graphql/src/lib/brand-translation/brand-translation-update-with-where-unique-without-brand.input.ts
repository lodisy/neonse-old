import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';
import { BrandTranslationUpdateWithoutBrandInput } from './brand-translation-update-without-brand.input';

@InputType()
export class BrandTranslationUpdateWithWhereUniqueWithoutBrandInput {

    @Field(() => BrandTranslationWhereUniqueInput, {nullable:false})
    where!: BrandTranslationWhereUniqueInput;

    @Field(() => BrandTranslationUpdateWithoutBrandInput, {nullable:false})
    data!: BrandTranslationUpdateWithoutBrandInput;
}
