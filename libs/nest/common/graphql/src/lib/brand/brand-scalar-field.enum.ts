import { registerEnumType } from '@nestjs/graphql';

export enum BrandScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    slug = "slug",
    country = "country",
    year = "year",
    description = "description",
    languageCode = "languageCode"
}


registerEnumType(BrandScalarFieldEnum, { name: 'BrandScalarFieldEnum', description: undefined })
