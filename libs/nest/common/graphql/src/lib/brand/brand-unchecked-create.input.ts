import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { BrandTranslationUncheckedCreateNestedManyWithoutBrandInput } from '../brand-translation/brand-translation-unchecked-create-nested-many-without-brand.input';

@InputType()
export class BrandUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => BrandTranslationUncheckedCreateNestedManyWithoutBrandInput, {nullable:true})
    translations?: BrandTranslationUncheckedCreateNestedManyWithoutBrandInput;
}
