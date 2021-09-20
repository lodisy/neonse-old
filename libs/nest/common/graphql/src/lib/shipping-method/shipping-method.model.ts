import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ShippingMethodTranslation } from '../shipping-method-translation/shipping-method-translation.model';
import { ShippingMethodCount } from './shipping-method-count.output';

@ObjectType()
export class ShippingMethod {

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

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => [ShippingMethodTranslation], {nullable:true})
    translations?: Array<ShippingMethodTranslation>;

    @Field(() => ShippingMethodCount, {nullable:true})
    _count?: ShippingMethodCount;
}
