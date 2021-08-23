import { registerEnumType } from '@nestjs/graphql';

export enum ShippingMethodTranslationScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    name = "name",
    description = "description",
    languageCode = "languageCode",
    shippingMethodId = "shippingMethodId"
}

registerEnumType(ShippingMethodTranslationScalarFieldEnum, { name: 'ShippingMethodTranslationScalarFieldEnum' })
