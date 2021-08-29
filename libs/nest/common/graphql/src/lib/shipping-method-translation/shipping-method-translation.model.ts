import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ShippingMethod } from '../shipping-method/shipping-method.model';

@ObjectType()
export class ShippingMethodTranslation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false,defaultValue:'zh_Hans'})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => ShippingMethod, {nullable:false})
    shippingMethod?: ShippingMethod;

    @Field(() => String, {nullable:false})
    shippingMethodId!: string;
}
