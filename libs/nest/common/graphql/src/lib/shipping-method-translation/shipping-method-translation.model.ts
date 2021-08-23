import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ShippingMethod } from '../shipping-method/shipping-method.model';

@ObjectType()
export class ShippingMethodTranslation {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;
    @Field(() => ShippingMethod, {nullable:false})
    shippingMethod?: ShippingMethod;
    @Field(() => String, {nullable:false})
    shippingMethodId!: string;
}
