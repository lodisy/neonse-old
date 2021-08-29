import { registerEnumType } from '@nestjs/graphql';

export enum ProductCategoryScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    slug = "slug",
    parentId = "parentId",
    languageCode = "languageCode"
}


registerEnumType(ProductCategoryScalarFieldEnum, { name: 'ProductCategoryScalarFieldEnum', description: undefined })
