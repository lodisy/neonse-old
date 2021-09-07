import { registerEnumType } from '@nestjs/graphql';

export enum ShippingZoneScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name"
}


registerEnumType(ShippingZoneScalarFieldEnum, { name: 'ShippingZoneScalarFieldEnum', description: undefined })
