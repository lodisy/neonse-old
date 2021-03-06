import { registerEnumType } from '@nestjs/graphql';

export enum AddressScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    profileId = "profileId",
    fullname = "fullname",
    email = "email",
    mobile = "mobile",
    company = "company",
    streetLine1 = "streetLine1",
    streetLine2 = "streetLine2",
    district = "district",
    city = "city",
    state = "state",
    postalCode = "postalCode",
    countryId = "countryId",
    'default' = "default",
    customFields = "customFields"
}


registerEnumType(AddressScalarFieldEnum, { name: 'AddressScalarFieldEnum', description: undefined })
