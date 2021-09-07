import { registerEnumType } from '@nestjs/graphql';

export enum CountryScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    code = "code",
    name = "name",
    enabled = "enabled",
    languageCode = "languageCode",
    shippingZoneId = "shippingZoneId"
}


registerEnumType(CountryScalarFieldEnum, { name: 'CountryScalarFieldEnum', description: undefined })
