import { registerEnumType } from '@nestjs/graphql';

export enum CountryTranslationScalarFieldEnum {
    id = "id",
    languageCode = "languageCode",
    name = "name",
    countryId = "countryId"
}


registerEnumType(CountryTranslationScalarFieldEnum, { name: 'CountryTranslationScalarFieldEnum', description: undefined })
