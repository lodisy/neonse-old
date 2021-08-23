import { registerEnumType } from '@nestjs/graphql';

export enum ProductTypeScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    slug = "slug"
}

registerEnumType(ProductTypeScalarFieldEnum, { name: 'ProductTypeScalarFieldEnum' })
