import { registerEnumType } from '@nestjs/graphql';

export enum ProductCategoryTranslationScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    languageCode = "languageCode",
    name = "name",
    productCategoryId = "productCategoryId"
}

registerEnumType(ProductCategoryTranslationScalarFieldEnum, { name: 'ProductCategoryTranslationScalarFieldEnum' })
