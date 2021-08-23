import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductCategory } from '../product-category/product-category.model';

@ObjectType()
export class ProductCategoryTranslation {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => LanguageCode, {nullable:false})
    languageCode!: keyof typeof LanguageCode;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductCategory, {nullable:true})
    productCategory?: ProductCategory;
    @Field(() => String, {nullable:true})
    productCategoryId!: string | null;
}
