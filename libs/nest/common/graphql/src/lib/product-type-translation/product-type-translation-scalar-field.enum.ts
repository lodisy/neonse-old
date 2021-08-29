import { registerEnumType } from '@nestjs/graphql';

export enum ProductTypeTranslationScalarFieldEnum {
    id = "id",
    languageCode = "languageCode",
    name = "name",
    productTypeId = "productTypeId"
}


registerEnumType(ProductTypeTranslationScalarFieldEnum, { name: 'ProductTypeTranslationScalarFieldEnum', description: undefined })
