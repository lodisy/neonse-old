import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { Brand } from '../brand/brand.model';

@ObjectType()
export class BrandTranslation {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    country!: string | null;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => Brand, {nullable:false})
    brand?: Brand;
    @Field(() => String, {nullable:false})
    brandId!: string;
}
