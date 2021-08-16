import { registerEnumType } from '@nestjs/graphql';

export enum ProductCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    parentId = "parentId"
}

registerEnumType(ProductCategoryScalarFieldEnum, { name: 'ProductCategoryScalarFieldEnum' })
