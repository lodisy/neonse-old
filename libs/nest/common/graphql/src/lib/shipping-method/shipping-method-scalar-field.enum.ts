import { registerEnumType } from '@nestjs/graphql';

export enum ShippingMethodScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    code = "code",
    name = "name",
    description = "description"
}

registerEnumType(ShippingMethodScalarFieldEnum, { name: 'ShippingMethodScalarFieldEnum' })
