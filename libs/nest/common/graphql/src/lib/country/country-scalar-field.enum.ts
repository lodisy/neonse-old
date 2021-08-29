import { registerEnumType } from '@nestjs/graphql';

export enum CountryScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    code = "code",
    name = "name",
    enabled = "enabled",
    languageCode = "languageCode"
}


registerEnumType(CountryScalarFieldEnum, { name: 'CountryScalarFieldEnum', description: undefined })
