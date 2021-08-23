import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';

@ObjectType()
export class ProductVariantTranslationMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    productVariantId?: string;
}
