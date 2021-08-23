import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProfileCreateNestedManyWithoutBrandsInput } from '../profile/profile-create-nested-many-without-brands.input';
import { ProductCreateNestedManyWithoutBrandsInput } from '../product/product-create-nested-many-without-brands.input';
import { BrandTranslationCreateNestedManyWithoutBrandInput } from '../brand-translation/brand-translation-create-nested-many-without-brand.input';

@InputType()
export class BrandCreateInput {

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

    @Field(() => ProfileCreateNestedManyWithoutBrandsInput, {nullable:true})
    founders?: ProfileCreateNestedManyWithoutBrandsInput;

    @Field(() => ProductCreateNestedManyWithoutBrandsInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutBrandsInput;

    @Field(() => BrandTranslationCreateNestedManyWithoutBrandInput, {nullable:true})
    translations?: BrandTranslationCreateNestedManyWithoutBrandInput;
}
