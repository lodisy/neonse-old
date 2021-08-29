import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { Product } from '../product/product.model';

@ObjectType()
export class ProductTranslation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => LanguageCode, {nullable:false,defaultValue:'zh_Hans'})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    discription!: string | null;

    @Field(() => Product, {nullable:true})
    product?: Product;

    @Field(() => String, {nullable:true})
    productId!: string | null;
}
