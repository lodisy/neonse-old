import { registerEnumType } from '@nestjs/graphql';

export enum BrandScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    country = "country",
    year = "year",
    description = "description",
    languageCode = "languageCode"
}

registerEnumType(BrandScalarFieldEnum, { name: 'BrandScalarFieldEnum' })
