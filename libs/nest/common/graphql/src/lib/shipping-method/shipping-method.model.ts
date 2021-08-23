import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ShippingMethodTranslation } from '../shipping-method-translation/shipping-method-translation.model';
import { LanguageCode } from '../prisma/language-code.enum';

@ObjectType()
export class ShippingMethod {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => [ShippingMethodTranslation], {nullable:true})
    translations?: Array<ShippingMethodTranslation>;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;
}
