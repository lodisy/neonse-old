import { registerEnumType } from '@nestjs/graphql';

export enum CountryTranslationScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    languageCode = "languageCode",
    name = "name",
    countryId = "countryId"
}

registerEnumType(CountryTranslationScalarFieldEnum, { name: 'CountryTranslationScalarFieldEnum' })
