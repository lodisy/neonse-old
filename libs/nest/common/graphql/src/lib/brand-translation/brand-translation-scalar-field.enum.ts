import { registerEnumType } from '@nestjs/graphql';

export enum BrandTranslationScalarFieldEnum {
    id = "id",
    languageCode = "languageCode",
    name = "name",
    country = "country",
    description = "description",
    brandId = "brandId"
}


registerEnumType(BrandTranslationScalarFieldEnum, { name: 'BrandTranslationScalarFieldEnum', description: undefined })
