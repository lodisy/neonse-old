import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductType } from '../product-type/product-type.model';

@ObjectType()
export class ProductTypeTranslation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false,defaultValue:'zh_Hans'})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductType, {nullable:true})
    productType?: ProductType;

    @Field(() => String, {nullable:true})
    productTypeId!: string | null;
}
