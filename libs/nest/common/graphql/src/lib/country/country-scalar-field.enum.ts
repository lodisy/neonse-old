import { registerEnumType } from '@nestjs/graphql';

export enum CountryScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    languageCode = "languageCode",
    code = "code",
    name = "name",
    enabled = "enabled"
}

registerEnumType(CountryScalarFieldEnum, { name: 'CountryScalarFieldEnum' })
