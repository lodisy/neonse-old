import { registerEnumType } from '@nestjs/graphql';

export enum ProductCategoryTranslationScalarFieldEnum {
    id = "id",
    languageCode = "languageCode",
    name = "name",
    productCategoryId = "productCategoryId"
}


registerEnumType(ProductCategoryTranslationScalarFieldEnum, { name: 'ProductCategoryTranslationScalarFieldEnum', description: undefined })
