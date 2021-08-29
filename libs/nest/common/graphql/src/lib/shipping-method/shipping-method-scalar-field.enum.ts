import { registerEnumType } from '@nestjs/graphql';

export enum ShippingMethodScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    code = "code",
    name = "name",
    description = "description",
    languageCode = "languageCode"
}


registerEnumType(ShippingMethodScalarFieldEnum, { name: 'ShippingMethodScalarFieldEnum', description: undefined })
