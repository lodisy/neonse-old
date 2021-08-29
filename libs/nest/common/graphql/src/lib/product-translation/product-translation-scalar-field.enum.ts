import { registerEnumType } from '@nestjs/graphql';

export enum ProductTranslationScalarFieldEnum {
    id = "id",
    languageCode = "languageCode",
    name = "name",
    discription = "discription",
    productId = "productId"
}


registerEnumType(ProductTranslationScalarFieldEnum, { name: 'ProductTranslationScalarFieldEnum', description: undefined })
