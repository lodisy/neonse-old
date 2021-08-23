import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandTranslationWhereUniqueInput } from './brand-translation-where-unique.input';
import { BrandTranslationCreateWithoutBrandInput } from './brand-translation-create-without-brand.input';

@InputType()
export class BrandTranslationCreateOrConnectWithoutBrandInput {

    @Field(() => BrandTranslationWhereUniqueInput, {nullable:false})
    where!: BrandTranslationWhereUniqueInput;

    @Field(() => BrandTranslationCreateWithoutBrandInput, {nullable:false})
    create!: BrandTranslationCreateWithoutBrandInput;
}
