import { registerEnumType } from '@nestjs/graphql';

export enum ProductTypeTranslationScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    languageCode = "languageCode",
    name = "name",
    productTypeId = "productTypeId"
}

registerEnumType(ProductTypeTranslationScalarFieldEnum, { name: 'ProductTypeTranslationScalarFieldEnum' })
