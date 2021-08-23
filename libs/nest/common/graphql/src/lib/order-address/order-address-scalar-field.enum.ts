import { registerEnumType } from '@nestjs/graphql';

export enum OrderAddressScalarFieldEnum {
    email = "email",
    phone = "phone",
    fullname = "fullname",
    company = "company",
    streetLine1 = "streetLine1",
    streetLine2 = "streetLine2",
    district = "district",
    city = "city",
    state = "state",
    postalCode = "postalCode",
    country = "country",
    customFields = "customFields",
    orderId = "orderId"
}

registerEnumType(OrderAddressScalarFieldEnum, { name: 'OrderAddressScalarFieldEnum' })
