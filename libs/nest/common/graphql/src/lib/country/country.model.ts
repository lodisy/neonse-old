import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { CountryTranslation } from '../country-translation/country-translation.model';

/** 支持运送的国家 */
/** 支持运送的国家 */
/** 支持运送的国家 */
/** 支持运送的国家 */
/** 支持运送的国家 */
/** 支持运送的国家 */
/** 支持运送的国家 */
/** 支持运送的国家 */
@ObjectType({description:'支持运送的国家'})
export class Country {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;
    @Field(() => [CountryTranslation], {nullable:true})
    translations?: Array<CountryTranslation>;
}
