import { registerEnumType } from '@nestjs/graphql';

export enum ProductTranslationScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    languageCode = "languageCode",
    name = "name",
    discription = "discription",
    productId = "productId"
}

registerEnumType(ProductTranslationScalarFieldEnum, { name: 'ProductTranslationScalarFieldEnum' })
