import { registerEnumType } from '@nestjs/graphql';

export enum ShippingMethodTranslationScalarFieldEnum {
    id = "id",
    languageCode = "languageCode",
    name = "name",
    description = "description",
    shippingMethodId = "shippingMethodId"
}


registerEnumType(ShippingMethodTranslationScalarFieldEnum, { name: 'ShippingMethodTranslationScalarFieldEnum', description: undefined })
