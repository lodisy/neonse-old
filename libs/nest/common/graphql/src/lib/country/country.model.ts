import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { CountryTranslation } from '../country-translation/country-translation.model';
import { Address } from '../address/address.model';
import { ShippingZone } from '../shipping-zone/shipping-zone.model';
import { CountryCount } from './country-count.output';

/** 支持运送的国家 */
@ObjectType({description:'支持运送的国家'})
export class Country {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    /** 开启支持运送 */
    @Field(() => Boolean, {nullable:false,description:'开启支持运送'})
    enabled!: boolean;

    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => [CountryTranslation], {nullable:true})
    translations?: Array<CountryTranslation>;

    @Field(() => [Address], {nullable:true})
    address?: Array<Address>;

    @Field(() => ShippingZone, {nullable:true})
    shippingZone?: ShippingZone;

    @Field(() => String, {nullable:true})
    shippingZoneId!: string | null;

    @Field(() => CountryCount, {nullable:true})
    _count?: CountryCount;
}
